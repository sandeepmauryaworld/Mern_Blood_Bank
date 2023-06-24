import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_BASEURL,
});
API.interceptors.request.use(() => {
  if (localStorage.getItem("token")) {
    req.header.Authorization = `Bearer ${localStorage.getItem("toekn")}`;
  }
  return req;
});

export default API;
