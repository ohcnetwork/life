from collections import namedtuple
import requests
import os
import json
from state_data import state_data

STATES = [state["state"] for state in state_data["states"]]

District = namedtuple("District", ["name", "state"])
API_KEY = os.environ["AIRTABLE_API_KEY"]

headers = {"Authorization": f"Bearer {API_KEY}"}


def get_records(url: str) -> list:
    records = []
    offset = ""
    while True:
        response = requests.get(url, headers=headers,
                                params=[("offset", offset)])
        records.extend(response.json()["records"])
        if "offset" in response.json():
            offset = response.json()["offset"]
        else:
            break
    return records


def get_active_district_data():
    records = get_records(
        "https://api.airtable.com/v0/appIVYBhHiWvtSV1h/Districts")
    active_districts = {"data": []}
    for district in records:
        if("Oxygen 2" in district["fields"] or "Hospitals, Bed, ICU" in district["fields"] or "Medicine, Injection" in district["fields"] or "Ambulance" in district["fields"] or "Helpline" in district["fields"] or "Doctor, Telemedicine" in district["fields"] or "Government contact" in district["fields"]):
            active_districts["data"].append(
                {
                    "id": district["id"],
                    "state": district["fields"]["Name (from State)"][0],
                    "district": district["fields"].get("Name"),
                    "oxygen": "Oxygen 2" in district["fields"],
                    "hospitals": "Hospitals, Bed, ICU" in district["fields"],
                    "medicine": "Medicine, Injection" in district["fields"],
                    "ambulance": "Ambulance" in district["fields"],
                    "helpline": "Helpline" in district["fields"],
                    "doctor": "Doctor, Telemedicine" in district["fields"],
                    "contact": "Government contact" in district["fields"],
                }
            )
    return active_districts


def get_district_data():
    records = get_records(
        "https://api.airtable.com/v0/appIVYBhHiWvtSV1h/Districts")
    districts = {}
    for district in records:
        districts[district["id"]] = District(district["fields"].get(
            "Name"), district["fields"]["Name (from State)"][0])
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
        states_json.write(json.dumps(data, indent=4, sort_keys=True))


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

        oxygen_data["data"].append(
            {
                "id": record["id"],
                "state": district.state,
                "district": district.name,
                "city": record["fields"].get("District"),
                "name": record["fields"].get("Name"),
                "description": record["fields"].get("Description"),
                "phone1": record["fields"].get("Phone 1"),
                "phone2": record["fields"].get("Phone 2"),
                "sourceLink": record["fields"].get("Source link"),
                "createdTime": record["createdTime"],
                "sourceName": record["fields"].get("Source Name"),
                "companyName": record["fields"].get("Company name"),
                "verificationStatus": record["fields"].get("Latest_Verification_Status")
                if "Latest_Verification_Status" in record["fields"]
                else "Unresponsive",
                "comment": record["fields"].get("Verifier_Comment"),
                "lastVerifiedOn": record["fields"].get("Verified_On"),
                "verifiedBy": record["fields"]["Verified_By"][0].get("name")
                if "Verified_By" in record["fields"]
                else [{}],
                "type": record["fields"].get("Type"),
                "availability": record["fields"].get("Availability"),
                "homeDeliveryAvailable": record["fields"].get("Home delivery available"),
                "instructions": record["fields"].get("Instructions"),
                "emailId": record["fields"].get("Email ID"),
            }
        )
    return oxygen_data


def get_hospital_clinic_centre():
    url = "https://api.airtable.com/v0/appIVYBhHiWvtSV1h/Hospital%2C%20Clinics%2C%20Centre"
    hospital_clinic_centre = {"data": []}
    raw_data = get_records(url)
    for record in raw_data:
        try:
            district = districts[record["fields"]["Districts"][0]]
        except Exception:
            continue
        hospital_clinic_centre["data"].append(
            {
                "id": record["id"],
                "name": record["fields"].get("Name"),
                "state": district.state,
                "district": district.name,
                "pointOfContact": record["fields"].get("pointOfContact"),
                "phone1": record["fields"].get("phone1"),
                "phone2": record["fields"].get("phone2"),
                "email1": record["fields"].get("email1"),
                "email2": record["fields"].get("email2"),
                "verificationStatus": record["fields"].get("Latest_Verification_Status")
                if "Latest_Verification_Status" in record["fields"]
                else "Unresponsive",
                "lastVerifiedOn": record["fields"].get("Verified_On"),
                "verifiedBy": record["fields"]["Verified_By"][0].get("name")
                if "Verified_By" in record["fields"]
                else [{}],
                "comment": record["fields"].get("Verifier_Comment"),
                "typeOfHospital": record["fields"].get("Type of Hospital"),
                "subCategory": record["fields"].get("Sub category"),
                "availability": record["fields"].get("Availability"),
                "typeOfBedAvailable": record["fields"].get("Type of bed available"),
                "totalBedsAvailable": record["fields"].get("How many beds available"),
                "createdTime": record["createdTime"],
            }
        )
    return hospital_clinic_centre


def get_helpline_data():
    url = "https://api.airtable.com/v0/appIVYBhHiWvtSV1h/Helpline"
    helpline_data = {"data": []}
    raw_data = get_records(url)
    for record in raw_data:
        try:
            district = districts[record["fields"]["Districts"][0]]
        except Exception:
            continue
        helpline_data["data"].append(
            {
                "id": record["id"],
                "name": record["fields"].get("Name of helpline"),
                "category": record["fields"].get("Category"),
                "state": district.state,
                "district": district.name,
                "phone1": record["fields"].get("phone1"),
                "phone2": record["fields"].get("phone2"),
                "sourceUrl": record["fields"].get("sourceUrl"),
                "source": record["fields"].get("source"),
                "description": record["fields"].get("description"),
                "createdTime": record["createdTime"],
                "verificationStatus": record["fields"].get("Latest_Verification_Status")
                if "Latest_Verification_Status" in record["fields"]
                else "Unresponsive",
                "comment": record["fields"].get("Verifier_Comment"),
                "lastVerifiedOn": record["fields"].get("Verified_On"),
                "verifiedBy": record["fields"]["Verified_By"].get("name")
                if "Verified_By" in record["fields"]
                else None,
            }
        )
    return helpline_data


def get_medicine_data():
    url = "https://api.airtable.com/v0/appIVYBhHiWvtSV1h/Medicine%2C%20Injection"
    medicine_data = {"data": []}
    raw_data = get_records(url)
    for record in raw_data:
        try:
            district = districts[record["fields"]["Districts"][0]]
        except Exception:
            continue
        medicine_data["data"].append(
            {
                "id": record["id"],
                "city": record["fields"].get("City"),
                "description": record["fields"].get("Description"),
                "name": record["fields"].get("Distributor Name"),
                "address": record["fields"].get("Address"),
                "emailId": record["fields"].get("Email ID"),
                "state": district.state,
                "district": district.name,
                "phone1": record["fields"].get("Phone 1"),
                "source": record["fields"].get("Source"),
                "contactName": record["fields"].get("Contact name"),
                "verificationStatus": record["fields"].get("Latest_Verification_Status")
                if "Latest_Verification_Status" in record["fields"]
                else "Unresponsive",
                "lastVerifiedOn": record["fields"].get("Verified_On"),
                "verifiedBy": record["fields"]["Verified_By"][0].get("name")
                if "Verified_By" in record["fields"]
                else [{}],
                "comment": record["fields"].get("Verifier_Comment"),
                "priceCheck": record["fields"].get("Price_Check"),
                "createdTime": record["createdTime"],
            }
        )
    return medicine_data


def get_ambulance_data():
    url = "https://api.airtable.com/v0/appIVYBhHiWvtSV1h/Medicine%2C%20Injection"
    ambulance_data = {"data": []}
    raw_data = get_records(url)
    for record in raw_data:
        try:
            district = districts[record["fields"]["Districts"][0]]
        except Exception:
            continue
        ambulance_data["data"].append(
            {
                "id": record["id"],
                "name": record["fields"].get("Ambulance service name"),
                "area": record["fields"].get("Area"),
                "state": district.state,
                "district": district.name,
                "phone1": record["fields"].get("Phone 1"),
                "phone2": record["fields"].get("Phone 2"),
                "source": record["fields"].get("Source"),
                "verificationStatus": record["fields"].get("Latest_Verification_Status")
                if "Latest_Verification_Status" in record["fields"]
                else "Unresponsive",
                "lastVerifiedOn": record["fields"].get("Verified_On"),
                "verifiedBy": record["fields"]["Verified_By"][0].get("name")
                if "Verified_By" in record["fields"]
                else [{}],
                "comment": record["fields"].get("Verifier_Comment"),
                "createdTime": record["createdTime"],
            }
        )
    return ambulance_data


def get_vaccine_data():
    url = "https://api.airtable.com/v0/appIVYBhHiWvtSV1h/vaccine"
    ambulance_data = {"data": []}
    raw_data = get_records(url)
    for record in raw_data:
        try:
            district = districts[record["fields"]["Districts"][0]]
        except Exception:
            continue
        ambulance_data["data"].append(
            {
                "id": record["id"],
                "name": record["fields"].get("Center Name"),
                "state": district.state,
                "district": district.name,
                "date": record["fields"].get("Date"),
                "status": record["fields"].get("Status"),
                "address": record["fields"].get("Address"),
                "verificationStatus": record["fields"].get("Last_Verification")
                if "Latest_Verification_Status" in record["fields"]
                else "Unresponsive",
                "lastVerifiedOn": record["fields"].get("Verified_on"),
                "verifiedBy": record["fields"]["Verified_By"][0].get("name")
                if "Verified_By" in record["fields"]
                else [{}],
                "comment": record["fields"].get("Verifier_comment"),
                "createdTime": record["createdTime"],
            }
        )
    return ambulance_data


def filter_verified_data(data):
    is_verified = lambda x: "verified" in x["verificationStatus"].lower()
    filtered_data = {
       "data": list(filter(is_verified, data["data"]))
    }
    return filtered_data

if __name__ == "__main__":
    active_district_data = get_active_district_data()
    dump_data("active_district_data.json", active_district_data)
    
    hospital_data = get_hospital_clinic_centre()
    dump_data("hospital_clinic_centre.json", hospital_data)
    dump_data("hospital_clinic_centre_verified.json", filter_verified_data(hospital_data))
    
    oxygen_data = get_oxygen_data()
    dump_data("oxygen.json", oxygen_data)
    dump_data("oxygen_verified.json", filter_verified_data(oxygen_data))
    
    helpline_data = get_helpline_data()
    dump_data("helpline.json", helpline_data)
    dump_data("helpline_verified.json", filter_verified_data(helpline_data))
    
    medicine_data = get_medicine_data()
    dump_data("medicine.json", medicine_data)
    dump_data("medicine_verified.json", filter_verified_data(medicine_data))
    
    ambulance_data = get_ambulance_data()
    dump_data("ambulance.json", ambulance_data)
    dump_data("ambulance_verified.json", filter_verified_data(ambulance_data))

    vaccine_data = get_vaccine_data()
    dump_data("vaccine.json", vaccine_data)
    dump_data("vaccine_verified.json", filter_verified_data(vaccine_data))
