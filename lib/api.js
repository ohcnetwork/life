import plasmaObjects from '../data/plasma.json';
import ambulancesObjects from '../data/ambulance.json';
import stateObjects from '../data/states.json';
import oxygenObjects from '../data/oxygen.json';
import medicineObjects from '../data/medicine.json';
import hospitalObjects from '../data/hospital_bed_icu.json';
import helplineObjects from '../data/helpline.json';
import { activeDistricts, activeStates, parametreize, statePaths } from './utils';

class get {
    constructor(object) {
        this.object = object;
    }

  from(state, district, isSortingRequired) {
    let obs = this.object["data"].filter(
      (p) =>
        parametreize(p.state) == state && parametreize(p.district) == district
    );
    if (isSortingRequired) {
      obs = this.sortByVerified(obs);
    }
    return obs;
  }

  sortByVerified(listings) {
    let verified = [];
    const unverified = [];
    
    listings.map((listing) => {
      if (listing.verificationStatus 
        && listing.verificationStatus.toLowerCase() === "verified") {
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
    verified.sort(function(a, b) {
      var keyA = new Date(a.lastVerifiedOn),
        keyB = new Date(b.lastVerifiedOn);
      // Compare the 2 dates
      if (keyA > keyB) return -1;
      if (keyA < keyB) return 1;
      return 0;
    });
    return verified;
  }
}
export function plasmaByDistrict(state, district, isSortingRequired) {
  return new get(plasmaObjects).from(state, district, isSortingRequired)
}
export function getAmbulances(state, district, isSortingRequired) {
  return new get(ambulancesObjects).from(state, district, isSortingRequired)
}
export function getOxygen(state, district, isSortingRequired) {
  return new get(oxygenObjects).from(state, district, isSortingRequired)
}
export function medicineByDistrict(state, district, isSortingRequired) {
  return new get(medicineObjects).from(state, district, isSortingRequired)
}
export function hospitalByDistrict(state, district, isSortingRequired) {
  return new get(hospitalObjects).from(state, district, isSortingRequired)
}
export function helplineByDistrict(state, district, isSortingRequired) {
  return new get(helplineObjects).from(state, district, isSortingRequired)
}

export function getStates(page = 'all') {
    return activeStates(activeDistricts(page));
}

export function statesAndDistrict() {
    return stateObjects;
}

export const districtWithState = (page = 'all') => activeDistricts(page);

export function getDistricts(state) {
    return activeDistricts('all').filter((f) => parametreize(f.state) == state);
}
