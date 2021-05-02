import ambulancesObjects from '@data/ambulance_v2.json';
import stateObjects from '@data/states.json';
import oxygenObjects from '@data/oxygen_v2.json';
import medicineObjects from '@data/medicine_v2.json';
import hospitalObjects from '@data/hospital_v2.json';
import helplineObjects from '@data/helpline_v2.json';
import oxygenRequirements from '@data/requirement_data_v2.json';
import vaccineObjects from '@data/vaccine_v2.json';
import { activeDistricts, activeStates, isVerified, parametreize } from './utils';

export function getAmbulances() {
    return ambulancesObjects;
}
export function getOxygen() {
    return oxygenObjects;
}
export function getMedicines() {
    return medicineObjects;
}
export function hospitalByDistrict(state, district, isSortingRequired) {
    return new get(hospitalObjects, 'Hospital').from(state, district, isSortingRequired);
}
export function helplineByDistrict(state, district, isSortingRequired) {
    return new get(helplineObjects, 'Helpline').from(state, district, isSortingRequired);
}
export function getVaccine(state, district, isSortingRequired) {
    return new get(vaccineObjects, 'Vaccine').from(state, district, isSortingRequired);
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
    return (
        ambulancesObjects.data.length +
        oxygenObjects.data.length +
        medicineObjects.data.length +
        hospitalObjects.data.length +
        helplineObjects.data.length +
        vaccineObjects.data.length
    );
};
