import axios from "axios";

const urlLocal = "http://localhost:3000/";
const urlServer = "https://server-hackathon-991o.onrender.com/";

export const turismoApi = axios.create({
  baseURL: urlLocal,
});

export const turismoAPiFecth = urlLocal;
