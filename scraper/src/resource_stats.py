import requests
import os
import json

STATES_WITH_DISTRICTS = requests.get(
    "https://life-api.coronasafe.network/data/states.json").json()
STATES = STATES_WITH_DISTRICTS.keys()

root_dir = "data"


life_files = {
    "oxygen": {"url": "https://life_data.coronasafe.network/oxygen.json"},
    "hospital": {"url": "https://life_data.coronasafe.network/hospital.json"},
    "medicine": {"url": "https://life_data.coronasafe.network/medicine.json"},
    "helpline": {"url": "https://life_data.coronasafe.network/helpline.json"},
    "ambulance": {"url": "https://life_data.coronasafe.network/ambulance.json"},
    "food": {"url": "https://life_data.coronasafe.network/food.json"},
}

resources = life_files.keys()


def is_verified(x): return "verified" in x.get(
    "verification_status", "").lower()


def get_records(url):
    records = requests.get(url).json()
    return records


def dump_data(filename, data):
    # Wrapping the list of items with a container
    with open(f"{root_dir}/{filename}", "w") as json_file:
        json_file.write(json.dumps(data, sort_keys=True))


def resource_count(items):
    count = {i: 0 for i in resources}
    verified_count = {f"{i}_verified": 0 for i in resources}

    for resource in resources:
        filtered = list(filter(
            lambda x: x.get("type", "") == resource,
            items
        ))
        verified = list(filter(
            is_verified, filtered
        ))
        count[resource] += len(filtered)
        verified_count[f"{resource}_verified"] += len(verified)

    count.update(verified_count)
    return count


def make_state_stats(data):
    state_data = []
    district_data = []
    for state in STATES:
        # Filtering and Counting State Stats
        filtered = list(filter(
            lambda x: x.get("state", "") == state, data
        ))
        verified_filtered = list(filter(is_verified, filtered))

        state_basic_stats = {
            "type": "State",
            "name": state,
            "verified": len(verified_filtered),
            "total": len(filtered)
        }

        state_stats = {i: 0 for i in resources}
        verified_state_stats = {f"{i}_verified": 0 for i in resources}

        # Filtering and Counting District Stats
        for district in STATES_WITH_DISTRICTS[state]:
            district_filtered = list(filter(
                lambda x: x.get("district", "") == district,
                filtered
            ))
            verified_filtered = list(filter(is_verified, district_filtered))

            stats = {
                "type": "District",
                "state": state,
                "name": district,
                "verified": len(verified_filtered),
                "total": len(district_filtered)
            }
            stats.update(resource_count(district_filtered))
            for i in state_stats.keys():
                state_stats[i] += stats.get(i, 0)
            for i in verified_state_stats.keys():
                verified_state_stats[i] += stats.get(i, 0)

            district_data.append(stats)

        state_basic_stats.update(state_stats)
        state_basic_stats.update(verified_state_stats)
        state_data.append(state_basic_stats)

    state_data.sort(key=lambda x: x["total"], reverse=True)
    district_data.sort(key=lambda x: x["total"], reverse=True)
    return {
        "states": state_data,
        "districts": district_data
    }


def append_resource(item, type):
    item.update({
        "type": type
    })
    return item


if __name__ == "__main__":
    print("Dumping the Total Resources Count for Stats Purpose")

    whole_data = []

    for type, info in life_files.items():
        data = get_records(info['url'])
        data = list(map(
            lambda x: append_resource(x, type),
            data
        ))
        whole_data.extend(data)
        print(f"Downloaded {type} Data")

    stats = make_state_stats(whole_data)
    dump_data("resource_stats_v2.json", stats)

    print("Completed Dumping Stats - resource_stats_v2.json")
