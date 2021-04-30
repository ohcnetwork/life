import urllib.request
import json
import os
import ssl

active_district_data_v2_data = {
    "data": []
}

def generate_v2_file(url, data, name=""):
    life_file_name_v2 = url.split("/")[-1].split(".")[0] + "_v2.json"  # generating new file name from
    if name != "":
        life_file_name_v2 = name + "_v2.json"

    f = open("data/" + life_file_name_v2, 'w')
    print("Adding file: "+life_file_name_v2)
    print(len(data["data"]))
    f.write(json.dumps(data))
    f.close()


def parseInfo(info_type, data):
    s = set()
    json_array = json.loads(data)
    if len(active_district_data_v2_data["data"]) == 0:
        for info_type_json in json_array:
            active_district_json = dict(ambulance="false", contact="false", district="", doctor="false", helpline="false",
                                        hospitals="false", medicine="false", oxygen="false", state="")
            active_district_json["state"] = info_type_json["state_name"]
            active_district_json["district"] = info_type_json["district_name"]
            active_district_json[info_type] = "true"
            #if(info_type == "ambulance" && TODO_LOGIC_FOR_AMBULENCE_TRUE):  #Update the logic for ambulance to be true based on values in ambulance.json
                #active_district_json["ambulance"] = "true"

            if str(active_district_json) not in s:
                s.add(str(active_district_json))
        for i in s:
            active_district_data_v2_data["data"] .append(eval(i))
    else:
        updated_set = set()
        existing_data_json_arr = active_district_data_v2_data["data"]
        existing_data_json_arr_updated = []
        for info_type_json in json_array:
            for existing_data_json in existing_data_json_arr:
                existing_data_json_updated = existing_data_json
                if existing_data_json["state"] == info_type_json["state_name"] and existing_data_json["district"] == info_type_json["district_name"]:
                    existing_data_json_updated[info_type] = "true"
                    if str(existing_data_json_updated) not in updated_set:
                        updated_set.add(str(existing_data_json_updated))
            else:
                active_district_json = dict(ambulance="false", contact="false", district="", doctor="false", helpline="false",
                                            hospitals="false", medicine="false", oxygen="false", state="")
                active_district_json["state"] = info_type_json["state_name"]
                active_district_json["district"] = info_type_json["district_name"]
                active_district_json[info_type] = "true"
                updated_set.add(str(existing_data_json_updated))
        for i in updated_set:
            active_district_data_v2_data["data"].append(eval(i))

    generate_v2_file("active_district_data", active_district_data_v2_data)

# SSL certification issue was happening and 403 forbidden issue, these two solves it
if not os.environ.get('PYTHONHTTPSVERIFY', '') and getattr(ssl, '_create_unverified_context', None):
    ssl._create_default_https_context = ssl._create_unverified_context
user_agent = 'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.0.7) Gecko/2009021910 Firefox/3.0.7'
headers = {'User-Agent': user_agent, }

list_of_life_files = {
    "oxygen": {
        "url": "https://life_data.coronasafe.network/oxygen.json"
    },
    "hospitals": {
        "url": "https://life_data.coronasafe.network/hospital.json"
    }
    # Idea is there will be more keys for vaccine, ambulance ...
    #,"ambulance": {
    #    "url": "https://life_data.coronasafe.network/ambulance.json"
    #}
}

for life_file_key in list_of_life_files:
    life_file = list_of_life_files[life_file_key]["url"]
    request = urllib.request.Request(life_file, None, headers)  # The assembled request
    response = urllib.request.urlopen(request)
    data = response.read()
    generate_v2_file(url=life_file, data={"data" : json.loads(data.decode())})
    parseInfo(life_file_key, data)
    #list_of_life_files[life_file_key]["parseFunction"](data)
