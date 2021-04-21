import stateObjects from "../data/states.json";

export const parametreize = (string) => {
  return string.replace(/\s/gu, "_").toLowerCase();
};

export const humanize = (str) => {
  return str
    .replace(/^[\s_]+|[\s_]+$/g, "")
    .replace(/[_\s]+/g, " ")
    .replace(/^[a-z]/, function (m) {
      return m.toUpperCase();
    });
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

export const statesStaticPaths = () => {
  const paths = [];
  Object.keys(stateObjects).map((state) => {
    paths.push({
      params: {
        state: parametreize(state),
      },
    });
  });

  return paths;
};
