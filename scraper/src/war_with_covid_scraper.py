import requests
import csv
from datetime import datetime

from data_formats import WarWithCovidResource, LifeDataRecord


## Configs for scraping the URLs
API_URL = "https://covid-data-provider.eu-gb.mybluemix.net/api/tweet-data"
# Verified resource availabilities


def get_records(url: str) -> list:
    records = []
    response = requests.get(url)
    records = response.json()
    return records


def process_record(record: dict) -> WarWithCovidResource:
    try:
        resource = WarWithCovidResource(**record)
        return resource
    except TypeError:
        print("APIError: Response format changed\n{}".format(record))


def write_to_csv(resources: list[WarWithCovidResource]) -> bool:
    run_timestamp = datetime.now().isoformat()
    outfile = 'war_with_covid_{}.csv'.format(run_timestamp)
    field_names = [
        "id",
        "category",
        "city",
        "state", 
        "district",
        "title", 
        "phone_1",
        "phone_2", 
        "hospital_available_normal_beds", 
        "hospital_available_oxygen_beds",
        "hospital_available_ventilator_beds",
        "hospital_available_ventilator_beds",
        "quantity_available",
        "description",
        "source_link", 
        "created_on", 
    ]

    with open(outfile, 'w') as csvfile:        
        writer = csv.writer(csvfile, dialect='excel')
        writer.writerow(field_names)
        for resource in resources:
            life_data = resource.get_life_data_record()
            row = [getattr(life_data, key) for key in field_names]
            writer.writerow(row)


def main():
    records = get_records(API_URL)
    resources = [process_record(record) for record in records]
    write_to_csv(resources)


if __name__ == "__main__":
    main()



