import plasmaObjects from "../data/plasma.json";
import ambulancesObjects from "../data/ambulance.json";
import stateObjects from "../data/states.json";
import oxygenObjects from "../data/oxygen.json";
import { parametreize } from "./utils";

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
/**
 *  @return {{ state : string , district : string }[]}
 */
export function districtWithState() {
  const geoState = statesAndDistrict();
  return Object.keys(geoState).reduce((acc, cur) => {
    const temp = geoState[cur].map((i) => ({
      state: parametreize(cur),
      district: parametreize(i),
    }));
    return [...acc, ...temp];
  }, []);
}

export function getDistricts(state) {
  return districtWithState().filter((f) => f.state == state);
}

export function getAmbulances(state, district) {
  let obs = ambulanceObjects["data"].filter(
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
