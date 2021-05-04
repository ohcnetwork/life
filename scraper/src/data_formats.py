from datetime import datetime

from dataclasses import dataclass
from enum import Enum

# Data classes to represent the Life Data Records
# See: https://github.com/coronasafe/life/wiki/Life-Data-Structure

@dataclass
class LifeDataRecord:
    id: str
    title: str
    category: str
    phone_1: str
    district: str
    state: str
    resource_type: str = ""
    address: str = ""
    pincode: str = ""
    description: str = ""
    phone_2: str = ""
    email: str = ""
    quantity_available: str = ""
    price: str = ""
    source_link: str = ""
    comment: str = ""
    created_by: str = ""
    created_on: str = ""
    verified_by: str = ""
    last_verified_on: str = ""
    verification_status: str = ""
    city: str = ""
    hospital_available_normal_beds: str = ""
    hospital_available_oxygen_beds: str = ""
    hospital_available_icu_beds:str = ""
    hospital_available_ventilator_beds: str = ""
    latitude: str = ""
    longitude: str = ""
        

@dataclass
class WarWithCovidResource:
    # API Response format
    beds: bool
    contact: list
    fabiflu: bool
    favipiravir: bool
    icu: bool
    link: str
    location: str
    oxygen: bool
    plasma: bool
    remdesivir: bool
    source: str
    state: str
    text: str
    toclizumab: bool
    ts: datetime
    username: str
    ventilator: bool

    def get_contacts(self):
        if len(self.contact) >=2:
            return self.contact[0], self.contact[1]
        elif len(self.contact) == 1:
            return self.contact[0], None
        else:
            return "No Contact Provided", None

    def get_id(self):
        return "{}-{}".format(self.username, self.ts)
    
    def get_med_string(self):
        return "Fabiflu: {}, Favipiravir: {}, Plasma: {}, Remdesvir: {}, Tocilizumab: {}".format(
            self.fabiflu, self.favipiravir, self.plasma, self.remdesivir, self.toclizumab
        )

    def get_life_data_record(self):
        # Transform the WarWithCovid record to the Life Data Format
        contact_1, contact_2 = self.get_contacts()
        id = self.get_id()
        category = "hospital"
        meds = self.get_med_string()

        life_record = LifeDataRecord(
            id=id,
            title=self.username,
            category=category,
            phone_1=contact_1,
            phone_2=contact_2,
            description=self.text,
            source_link=self.link,
            state=self.state,
            district=self.location,
            city=self.location,
            hospital_available_normal_beds=self.beds,
            hospital_available_icu_beds=self.icu,
            hospital_available_oxygen_beds=self.oxygen,
            hospital_available_ventilator_beds=self.ventilator,
            quantity_available=meds,
            created_on=self.ts,
        )

        return life_record
