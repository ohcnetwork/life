import plasmaObjects from "../data/plasma.json";
import stateObjects from "../data/states.json";

export function plasmaByDistrict(state, district) {
  let obs = plasmaObjects["data"].filter(
    (p) =>
      p.state.replace(/\s/gu, "_").toLowerCase() == state &&
      p.district.replace(/\s/gu, "_").toLowerCase() == district
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
    const temp = geoState[cur].map((i) => ({ state: cur, district: i }));
    return [...acc, ...temp];
  }, []);
}
