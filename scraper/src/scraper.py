from collections import namedtuple
import requests
import os
import json
from state_data import state_data

STATES = [state["state"] for state in state_data["states"]]

District = namedtuple("District", ["name", "state"])
API_KEY = os.environ["AIRTABLE_API_KEY"]

headers = {
    "Authorization": f"Bearer {API_KEY}"
}


def get_records(url: str) -> list:
    records = []
    offset = ""
    while True:
        response = requests.get(
            url,
            headers=headers,
            params=[("offset", offset)]
        )
        records.extend(response.json()["records"])
        if "offset" in response.json():
            offset = response.json()["offset"]
        else:
            break
    return records


def get_district_data():
    records = get_records(
        "https://api.airtable.com/v0/appIVYBhHiWvtSV1h/Districts")
    districts = {}
    for district in records:
        districts[district["id"]] = District(
            district["fields"]["Name"], district["fields"]["Name (from State)"][0])
    return districts


def get_states_data():
    records = get_records(
        "https://api.airtable.com/v0/appIVYBhHiWvtSV1h/State")
    states = {}
    for state in records:
        states[state["fields"]["Name"]] = [
            districts[district].name for district in state["fields"]["Districts"]]
    return states


def dump_data(filename: str, data: dict):
    with open(f"data/{filename}", "w") as states_json:
        states_json.write(json.dumps(
            data, indent=4, sort_keys=True))


districts = get_district_data()


def sanitize_state(state: str) -> str:
    for internal_state in STATES:
        if state.lower().strip() in internal_state.lower():
            return internal_state
    return None


def get_oxygen_data():
    url = "https://api.airtable.com/v0/appIVYBhHiWvtSV1h/Oxygen"
    oxygen_data = {"data": []}
    raw_data = get_records(url)
    for record in raw_data:
        try:
            district = districts[record["fields"]["Districts"][0]]
        except Exception:
            continue
        oxygen_data["data"].append({
            "id": record["id"],
            "state": district.state,
            "district": district.name,
            "city": record["fields"].get("District"),
            "name": record["fields"].get("Person name"),
            "description": record["fields"].get("Description"),
            "phone1": record["fields"].get("Phone 1"),
            "phone2": record["fields"].get("Phone 2"),
            "source_link": record["fields"].get("Source link"),
            "createdTime": record["createdTime"],
            "source_name": record["fields"].get("Source Name"),
            "company_name": record["fields"].get("Company name"),
            "verified_status": record["fields"].get("Verified status").strip() if "Verified status" in record[
                "fields"] else None,
            "comments": record["fields"].get("Comments"),
        })
    return oxygen_data


def get_plasma_data():
    url = "https://api.airtable.com/v0/appIVYBhHiWvtSV1h/Plasma"
    plasma_data = {"data": []}
    raw_data = get_records(url)
    for record in raw_data:
        try:
            district = districts[record["fields"]["Districts"][0]]
        except Exception:
            continue
        plasma_data["data"].append({
            "id": record["id"],
            "state": district.state,
            "district": district.name,
            "city": record["fields"].get("City"),
            "name": record["fields"].get("Name"),
            "description": record["fields"].get("Description"),
            "phone1": record["fields"].get("Phone 1"),
            "source_link": record["fields"].get("Source link"),
            "createdTime": record["createdTime"],
        })
    return plasma_data


if __name__ == "__main__":
    # rec = get_records("https://api.airtable.com/v0/appIVYBhHiWvtSV1h/Oxygen")
    # rec = get_records(
    #     "https://api.airtable.com/v0/appIVYBhHiWvtSV1h/Medicine%2C%20Injection")
    # print(json.dumps(rec))
    # print(rec)
    # dump_states_data()
    # oxygen_data = get_oxygen_data()
    # dump_data("oxygen.json", oxygen_data)
    plasmadata = get_plasma_data()
    print(len(plasmadata["data"]))
    dump_data("plasma.json", plasmadata)
