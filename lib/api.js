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

    from(state, district) {
        let obs = this.object['data'].filter(
            (p) => parametreize(p.state) == state && parametreize(p.district) == district
        );
        return obs;
    }
}
export function plasmaByDistrict(state, district) {
    return new get(plasmaObjects).from(state, district);
}
export function getAmbulances(state, district) {
    return new get(ambulancesObjects).from(state, district);
}
export function getOxygen(state, district) {
    return new get(oxygenObjects).from(state, district);
}
export function medicineByDistrict(state, district) {
    return new get(medicineObjects).from(state, district);
}
export function hospitalByDistrict(state, district) {
    return new get(hospitalObjects).from(state, district);
}
export function helplineByDistrict(state, district) {
    return new get(helplineObjects).from(state, district);
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
