import stateObjects from "../data/states.json";

export const statePaths = () => {
  const paths = [];
  Object.keys(stateObjects).map((state) => {
    stateObjects[state].map((district) => {
      paths.push({
        params: {
          state: state.replace(/\s/gu, "_").toLowerCase(),
          district: district.replace(/\s/gu, "_").toLowerCase(),
        },
      });
    });
  });

  return paths;
};
