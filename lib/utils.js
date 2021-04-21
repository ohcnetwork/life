// import stateObjects from "../data/states.json";
import activeDistrictData from "../data/active_district_data.json";


export const parametreize = (string) => {
  console.log(string)
  return string.replace(/\s/gu, "_").toLowerCase();
};

export const humanize = (str) => {
  return str.replace(/^[\s_]+|[\s_]+$/g, "")
    .replace(/[_\s]+/g, " ")
    .replace(/^[a-z]/, function (m) {
      return m.toUpperCase();
    });
};

export const activeDistricts = (page) => {
  if(page === "all")
  return activeDistrictData.data;
  return activeDistrictData.data.filter(data => data[page]);
}

export const statePaths = (page) => {
  const paths = [];
  activeDistricts(page).map((district) => {
    paths.push({
      params: {
        state: parametreize(district.state),
        district: parametreize(district.district),
      },
    });
  });
  return paths;
};

export const activeStates = () => activeDistrictData.data.reduce((acc, curr) => acc.includes(curr.state) ? acc : [...acc, curr.state],[])

export const statesStaticPaths = () => {
  const paths = [];
  activeStates().map((state) => {
    paths.push({
      params: {
        state: parametreize(state),
      },
    });
  });

  return paths;
};
