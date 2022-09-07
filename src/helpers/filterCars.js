const types = {
  TODOS: "TODOS",
  AUTOS: "AUTOS",
  PICKUPS_Y_COMERCIALES: "PICKUPS Y COMERCIALES",
  SUVS_CROSSOVERS: "SUVS Y CROSSOVERS",
};

export const filterCars = (state, name) => {
  switch (name.toUpperCase()) {
    case types.TODOS:
      return state;

    case types.AUTOS:
      return state.filter(
        (car) => car.segment === "Sedan" || car.segment === "Hatchback"
      );

    case types.PICKUPS_Y_COMERCIALES:
      return state.filter((car) => car.segment === "Pickups y Comerciales");

    case types.SUVS_CROSSOVERS:
      return state.filter((car) => car.segment === "SUVs");

    default:
      return state;
  }
};
