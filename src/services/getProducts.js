import { instance } from "../axios/axiosConfig";

export const getProducts = (url) => {
  return instance(url)
    .then(({ data }) => data)
    .catch((e) => e);
};
