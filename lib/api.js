import plasmaObjects from "../data/plasma.json";
import stateObjects from "../data/states.json";

export function plasmaAllDistricts() {
  return plasmaObjects;
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
    const temp = geoState[cur].map((i) => ({ state: cur, district: i }));
    return [...acc, ...temp];
  }, []);
}
