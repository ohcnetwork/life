
import requests
import csv
from io import StringIO
import json
from scraper import dump_data


csv_url = 'https://docs.google.com/spreadsheets/d/1b9wYaz5yxiMFNSpDmi1Z3jJWT3fjx5jw2WV7clc0tYM/export?format=csv&id=1b9wYaz5yxiMFNSpDmi1Z3jJWT3fjx5jw2WV7clc0tYM&gid=972869835'
response = requests.get(csv_url)
csv_data = csv.reader(StringIO(response.text))
data = []
for row in list(csv_data)[4:]:
    if row[0].strip() != "":
        data.append({
            "name": row[0],
            "type": row[1],
            "oxygenRequired": row[2],
            "lowFlowOxygenConcentratorsRequired": row[3],
            "highFlowOxygenConcentratorsRequired": row[4],
            "remdesivirRequired": row[5],
            "tocilizumabRequired": row[6],
            "favipiravirRequired": row[7],
            "heparinVialsRequired": row[8],
            "ppeKitsRequired": row[9],
            "otherItemsRequired": row[10],
            "villageTownCity": row[11],
            "district": row[12],
            "state": row[13],
            "pincode": row[14],
            "secondaryDistrictsAndStates": row[15],
            "crateringToPeople": row[16],
            "beds": row[17],
            "covidBeds": row[18],
            "govtOrNonGovt": row[19],
            "approximatePatientsServedPerDay": row[20],
        })

dump_data("requirement_data.json", data)
