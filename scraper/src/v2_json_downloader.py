import urllib.request
import json
import os
import ssl


def generate_v2_file(url, data, name=""):
    life_file_name_v2 = url.split("/")[-1].split(".")[0] + "_v2.json"  # generating new file name from
    if name != "":
        life_file_name_v2 = name + "_v2.json"

    f = open("../../data/" + life_file_name_v2, 'w')
    print("Adding file: "+life_file_name_v2)
    f.write(json.dumps(data))
    f.close()


def parseOxygen(data):
    active_district_data_v2_data = {
        "data": []
    }
    json_array = json.loads(data)
    for oxygen_data in json_array:
        active_district_json = dict(ambulance="false", contact="false", district="", doctor="false", helpline="false",
                                    hospitals="false", medicine="false", oxygen="false", state="")
        active_district_json["state"] = oxygen_data["state_name"]
        active_district_json["district"] = oxygen_data["district_name"]
        active_district_data_v2_data["data"].append(active_district_json)
    generate_v2_file("active_district_data", active_district_data_v2_data)

# SSL certification issue was happening and 403 forbidden issue, these two solves it
if not os.environ.get('PYTHONHTTPSVERIFY', '') and getattr(ssl, '_create_unverified_context', None):
    ssl._create_default_https_context = ssl._create_unverified_context
user_agent = 'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.0.7) Gecko/2009021910 Firefox/3.0.7'
headers = {'User-Agent': user_agent, }

list_of_life_files = {
    "oxygen": {
        "url": "https://life_data.coronasafe.network/oxygen.json",
        "parseFunction": parseOxygen
    }
}  # There will be more keys for vaccine, ambulance ...

for life_file_key in list_of_life_files:
    life_file = list_of_life_files[life_file_key]["url"]
    request = urllib.request.Request(life_file, None, headers)  # The assembled request
    response = urllib.request.urlopen(request)
    data = response.read()
    generate_v2_file(url=life_file, data={"data" : json.loads(data.decode())})
    list_of_life_files[life_file_key]["parseFunction"](data)
