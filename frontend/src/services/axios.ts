import axios from "axios";

const googleAxios = axios.create({
  baseURL: "https://maps.googleapis.com/maps/api/geocode",
});

const PORT = import.meta.env.VITE_BACKEND_PORT || 3000;
const HOST = import.meta.env.VITE_BACKEND_HOST || "localhost";
const backendAxios = axios.create({ baseURL: `http://${HOST}:${PORT}` });

export { googleAxios, backendAxios };
