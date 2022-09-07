const types = {
  nothing: "nothing",
  minor: "minor",
  high: "high",
  new: "new",
  old: "old",
};

export const orderCars = (array, type) => {
  switch (type) {
    case types.nothing:
      return array.sort((a, b) => a.id - b.id);

    case types.high:
      return array.sort((a, b) => b.price - a.price);

    case types.minor:
      return array.sort((a, b) => a.price - b.price);

    case types.new:
      return array.sort((a, b) => b.year - a.year);

    case types.old:
      return array.sort((a, b) => a.year - b.year);
    default:
      return array;
  }
};
