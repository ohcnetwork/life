import requests
import os

def start_processing():
    data = fetch_data()
    if (len(data) > 0):
        transformed_data = transform_data(data)


def fetch_data() -> list:
    data = []
    url = "https://life-api.coronasafe.network/data/oxygen_v2.json"
    response = requests.get(url)
    if ("data" in response.json() and len(response.json()["data"]) > 0):
        data.extend(response.json()["data"])
    return data

def transform_data(data):
    for record in data:
        if (record):
            address = ""
            if "address" in record:
                address += record["address"]
            if "pincode" in record:
                address += record["pincode"]
            if len(address) > 0:
                coordinates = fetch_coordinates(address)
                if coordinates != None:
                    record["lat"] = coordinates["lat"]
                    record["lng"] = coordinates["lng"]
    return data

def fetch_coordinates(address):
    url = generate_url(address)
    response = requests.get(url)
    formatted_response = response.json()
    coordinates = extract_coordinates(formatted_response)
    return coordinates


def generate_url(address):
    return "https://maps.googleapis.com/maps/api/geocode/json?address="+ address +"&key=" + os.environ["GEOCODE_KEY"]

def extract_coordinates(result):
    if ("results" in result and len(result["results"]) > 0 and "geometry" in result["results"][0]):
        coordinates = result["results"][0]["geometry"]["location"]
        return coordinates
    return None


if __name__ == "__main__":
    start_processing()
