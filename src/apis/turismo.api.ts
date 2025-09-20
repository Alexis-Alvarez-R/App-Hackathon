import axios from "axios";

export const turismoApi = axios.create({
  baseURL: "http://localhost:3000",
});

export const turismoAPiFecth = "http://localhost:3000";
