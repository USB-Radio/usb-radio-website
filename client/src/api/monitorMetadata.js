import axios from "axios";

const API_data = "http://64.227.11.166:3000/api/";
// const API_data = "http://localhost:3000/api/";

export const monitorDataRequest = () => axios.get(`${API_data}/data`);
export const azuraDataRequest = () => axios.get(`${API_data}/radio`);
export const spreakerShowRequest = () =>
  axios.get("https://api.spreaker.com/v2/users/8429931/shows");
