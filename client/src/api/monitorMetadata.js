import axios from "axios";

const API =
  window.location.hostname === "localhost"
    ? `http://localhost:3000/api`
    : `http://64.227.11.166:3000/api`;

export const monitorDataRequest = () => axios.get(`${API}/data`);
export const azuraDataRequest = () => axios.get(`${API}/radio`);
