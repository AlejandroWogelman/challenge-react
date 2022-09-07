import axios from "axios";

export const instance = axios.create({
  baseURL: "https://challenge.agenciaego.tech/api/models",
});
