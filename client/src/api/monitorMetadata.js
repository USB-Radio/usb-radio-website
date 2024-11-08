import axios from "axios";

const API = "http://64.227.11.166:3000/api";

export const monitorDataRequest = () => axios.get(`${API}/data`);
export const azuraDataRequest = () => axios.get(`${API}/radio`);
