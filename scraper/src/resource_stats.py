import requests
import os
import json

STATES_WITH_DISTRICTS = requests.get(
    "https://life-api.coronasafe.network/data/states.json").json()
STATES = STATES_WITH_DISTRICTS.keys()

root_dir = "data"


def get_records(url):
    records = requests.get(url).json()
    return records


def dump_data(filename, data):
    # Wrapping the list of items with a container
    with open(f"{root_dir}/{filename}", "w") as json_file:
        json_file.write(json.dumps(data, sort_keys=True))


def make_state_stats(data):
    state_data = []
    district_data = []
    for state in STATES:
        # Filtering and Counting State Stats
        filtered = list(filter(
            lambda x: x.get("state", "") == state, data
        ))
        state_data.append({
            "type": "State",
            "name": state,
            "count": len(filtered)
        })

        # Filtering and Counting District Stats
        for district in STATES_WITH_DISTRICTS[state]:
            district_filtered = list(filter(
                lambda x: x.get("district", "") == district,
                filtered
            ))
            district_data.append({
                "type": "District",
                "state": state,
                "name": district,
                "count": len(district_filtered)
            })

    state_data.sort(key=lambda x: x["count"], reverse=True)
    district_data.sort(key=lambda x: x["count"], reverse=True)
    return {
        "states": state_data,
        "districts": district_data
    }


if __name__ == "__main__":
    print("Dumping the Total Resources Count for Stats Purpose")

    life_files = {
        "oxygen": {"url": "https://life_data.coronasafe.network/oxygen.json"},
        "hospitals": {"url": "https://life_data.coronasafe.network/hospital.json"},
        "medicine": {"url": "https://life_data.coronasafe.network/medicine.json"},
        "helpline": {"url": "https://life_data.coronasafe.network/helpline.json"},
        "ambulance": {"url": "https://life_data.coronasafe.network/ambulance.json"},
        "food": {"url": "https://life_data.coronasafe.network/food.json"},
    }

    whole_data = []

    for type, info in life_files.items():
        data = get_records(info['url'])
        whole_data.extend(data)
        print(f"Downloaded {type} Data")

    stats = make_state_stats(whole_data)
    dump_data("resource_stats_v2.json", stats)

    print("Completed Dumping Stats - resource_stats_v2.json")
