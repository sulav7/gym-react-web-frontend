import axios from "axios";
import { clearLocalStorage, getTokenFromStorage } from "../storage.utils";

const instance = axios.create({
  baseURL: "http://localhost:8100/api/v1/",
  headers: {
    "Content-type": "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    const token = getTokenFromStorage();
    if (token) {
      config.headers["Authorization"] = `bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    if (err.response.data.code === 401) {
      clearLocalStorage("@token");
      clearLocalStorage("@data");
      window.location.href = "/login";
    }
    if (err.response.data.code === 403) {
      window.location.href = "/not-found";
    }
    return Promise.reject(err);
  }
);

export default instance;
