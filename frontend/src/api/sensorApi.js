import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000"
});

export const getWaterLevel = () => API.get("/water");
export const getTemperature = () => API.get("/temperature");
export const getTraffic = () => API.get("/traffic");
export const getAlerts = () => API.get("/alerts");