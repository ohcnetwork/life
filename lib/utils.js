import stateObjects from "../data/states.json";

export const parametreize = (string) => {
  return string.replace(/\s/gu, "_").toLowerCase();
};

export const statePaths = () => {
  const paths = [];
  Object.keys(stateObjects).map((state) => {
    stateObjects[state].map((district) => {
      paths.push({
        params: {
          state: parametreize(state),
          district: parametreize(district),
        },
      });
    });
  });

  return paths;
};
