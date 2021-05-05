import json
import os
import ssl
import urllib.request
import uuid
from collections import defaultdict

scoped_data = defaultdict(dict)


def generate_v2_file(url, data, name=""):
    life_file_name_v2 = url.split("/")[-1].split(".")[0] + "_v2.json"  # generating new file name from
    if name != "":
        life_file_name_v2 = name + "_v2.json"

    f = open("data/" + life_file_name_v2, "w")
    print("Adding file: " + life_file_name_v2)
    print(len(data["data"]))
    f.write(json.dumps(data))
    f.close()


def parseInfo(data):
    json_array = json.loads(data)
    for row in json_array:
        if row["district"] not in scoped_data[row["state"]]:
            scoped_data[row["state"]][row["district"]] = defaultdict(dict)
        scoped_data[row["state"]][row["district"]][row["category"]] = True


def generate_info_file():
    final_data = []
    for state in list(scoped_data.keys()):
        for district in list(scoped_data[state].keys()):
            data = {"state": state, "district": district}
            data.update(scoped_data[state][district])
            final_data.append(data)
    generate_v2_file("active_district_data", {"data": final_data})


# SSL certification issue was happening and 403 forbidden issue, these two solves it
if not os.environ.get("PYTHONHTTPSVERIFY", "") and getattr(ssl, "_create_unverified_context", None):
    ssl._create_default_https_context = ssl._create_unverified_context
user_agent = "Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.0.7) Gecko/2009021910 Firefox/3.0.7"
headers = {
    "User-Agent": user_agent,
}

list_of_life_files = {
    "oxygen": {"url": "https://life_data.coronasafe.network/oxygen.json"},
    "hospitals": {"url": "https://life_data.coronasafe.network/hospital.json"},
    "medicine": {"url": "https://life_data.coronasafe.network/medicine.json"},
    "helpline": {"url": "https://life_data.coronasafe.network/helpline.json"},
    "ambulance": {"url": "https://life_data.coronasafe.network/ambulance.json"},
    "food": {"url": "https://life_data.coronasafe.network/food.json"},

}

for life_file_key in list_of_life_files:
    life_file = list_of_life_files[life_file_key]["url"]
    request = urllib.request.Request(life_file, None, headers)  # The assembled request
    response = urllib.request.urlopen(request)
    data = response.read()
    generate_v2_file(url=life_file, data={"data": json.loads(data.decode())})
    parseInfo(data)
    # list_of_life_files[life_file_key]["parseFunction"](data)
generate_info_file()
