import plasmaObjects from "../data/plasma.json";
import ambulancesObjects from "../data/ambulance.json";
import stateObjects from "../data/states.json";
import oxygenObjects from "../data/oxygen.json";
import medicineObjects from "../data/medicine.json";
import hospitalObjects from "../data/hospital_bed_icu.json";
import helplineObjects from "../data/helpline.json";
import { activeDistricts, activeStates, parametreize, statePaths } from "./utils";

export function plasmaByDistrict(state, district) {
  let obs = plasmaObjects["data"].filter(
    (p) =>
      parametreize(p.state) == state && parametreize(p.district) == district
  );

  return obs;
}

export function statesAndDistrict() {
  return stateObjects;
}

export const districtWithState = (page = "all") => activeDistricts(page);

export function getDistricts(state) {
  return activeDistricts("all").filter((f) => parametreize(f.state) == state);
}

export function getAmbulances(state, district) {
  let obs = ambulancesObjects["data"].filter(
    (p) =>
      parametreize(p.state) == state && parametreize(p.district) == district
  );
  return obs;
}

export function getOxygen(state, district) {
  let obs = oxygenObjects["data"].filter(
    (p) =>
      parametreize(p.state) == state && parametreize(p.district) == district
  );
  return obs;
}

export function getStates(page = "all") {
  return activeStates(activeDistricts(page));
}

export function medicineByDistrict(state, district) {
  let obs = medicineObjects["data"].filter(
    (p) =>
      parametreize(p.state) == state && parametreize(p.district) == district
  );
  return obs;
}

export function hospitalByDistrict(state, district) {
  let obs = hospitalObjects["data"].filter(
    (p) =>
      parametreize(p.state) == state && parametreize(p.district) == district
  );
  return obs;
}

export function helplineByDistrict(state, district) {
  let obs = helplineObjects["data"].filter(
    (p) =>
      parametreize(p.state) == state && parametreize(p.district) == district
  );
  return obs;
}
