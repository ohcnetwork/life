import ambulancesObjects from '@data/ambulance_v2.json';
import stateObjects from '@data/states.json';
import oxygenObjects from '@data/oxygen_v2.json';
import medicineObjects from '@data/medicine_v2.json';
import hospitalObjects from '@data/hospital_v2.json';
import helplineObjects from '@data/helpline_v2.json';
import oxygenRequirements from '@data/requirement_data.json';
import vaccineObjects from '@data/vaccine_v2.json';
import foodObjects from '@data/food_v2.json';
import { activeDistricts, activeStates, isVerified, parametreize } from './utils';

class get {
    constructor(object, type) {
        this.object = object;
        this.type = type;
    }

    from(state, district, isSortingRequired, checkLocationIfExist) {
        let obs = this.object['data']
        if (state) {
            obs = obs.filter(
                (p) => parametreize(p.state) == state
            );
        }
        if (district && district !== "all") {
            obs = obs.filter(
                (p) => parametreize(p.district) == district
            );
        }
        if (checkLocationIfExist) {
            obs = obs.filter(
                (p) => Boolean(p.latitude && p.longitude)
            );
        }
        if (isSortingRequired) {
            obs = this.sortByVerified(obs);
        }
        obs = obs.map((e) => ({ ...e, type: this.type }));
        return obs;
    }

    sortByVerified(listings) {
        let verified = [];
        const unverified = [];

        listings.map((listing) => {
            if (isVerified(listing.verification_status)) {
                verified.push(listing);
            } else {
                unverified.push(listing);
            }
        });
        verified = this.sortVerifiedByDate(verified);
        return [...verified, ...unverified];
    }

    sortVerifiedByDate(verified) {
        if (!verified) {
            return [];
        }
        verified.sort(function (a, b) {
            var keyA = new Date(a.last_verified_on),
                keyB = new Date(b.last_verified_on);
            // Compare the 2 dates
            if (keyA > keyB) return -1;
            if (keyA < keyB) return 1;
            return 0;
        });
        return verified;
    }
}
export function getAmbulances(state, district, isSortingRequired, checkLocationIfExist) {
    return new get(ambulancesObjects, 'Ambulance').from(state, district, isSortingRequired, checkLocationIfExist);
}
export function getOxygen(state, district, isSortingRequired, checkLocationIfExist) {
    return new get(oxygenObjects, 'Oxygen').from(state, district, isSortingRequired, checkLocationIfExist);
}
export function medicineByDistrict(state, district, isSortingRequired, checkLocationIfExist) {
    return new get(medicineObjects, 'Medicine').from(state, district, isSortingRequired, checkLocationIfExist);
}
export function hospitalByDistrict(state, district, isSortingRequired, checkLocationIfExist) {
    return new get(hospitalObjects, 'Hospital').from(state, district, isSortingRequired, checkLocationIfExist);
}
export function helplineByDistrict(state, district, isSortingRequired, checkLocationIfExist) {
    return new get(helplineObjects, 'Helpline').from(state, district, isSortingRequired, checkLocationIfExist);
}
export function getVaccine(state, district, isSortingRequired, checkLocationIfExist) {
    return new get(vaccineObjects, 'Vaccine').from(state, district, isSortingRequired, checkLocationIfExist);
}
export function getFood(state, district, isSortingRequired, checkLocationIfExist) {
    return new get(foodObjects, 'Food').from(state, district, isSortingRequired, checkLocationIfExist);
}
export function getStates(page = 'all') {
    return activeStates(activeDistricts(page)).sort();
}

export function statesAndDistrict() {
    return stateObjects;
}

export const districtWithState = (page = 'all') => activeDistricts(page);

export function getDistricts(state) {
    return activeDistricts('all').filter((f) => parametreize(f.state) == state);
}

export function getOxygenRequirements() {
    return oxygenRequirements;
}

export const totalResources = () => {


    return {
        individual: {
            Ambulance: ambulancesObjects.data.length,
            Oxygen: oxygenObjects.data.length,
            Medicine: medicineObjects.data.length,
            Hospital: hospitalObjects.data.length,
            Food: foodObjects.data.length,
            Helpline: helplineObjects.data.length
        },
        get total() {
            let sum = 0;
            Object.keys(this.individual).forEach(e => sum += this.individual[e])
            return sum;
        }
    };
};
