import axios from "axios";
import { URL } from "./Global";

export default class Request {
  constructor(headers) {
    this.http = axios.create({
      baseURL: URL,
      withCredentials: true,
    });

    this.http.interceptors.request.use((config) => {
      config.headers = {
        // Authorization: Token ? `Bearer ${Token}` : '',
        "Content-Type": "application/json",
        ...headers,
      };
      return config;
    });

    this.http.interceptors.response.use(
      function (response) {
        return [response.data, response.status];
      },
      function (error) {
        if (error.response) {
          if (error.response.status && error.response.status === 403) {
            return Promise.reject(error.response.data);
          } else {
            return Promise.reject(error.response.data);
          }
        } else if (error.request) {
          return Promise.reject(error.request);
        } else {
          return Promise.reject(error);
        }
      }
    );
    for (const method of ["get", "post", "put", "delete"]) {
      this[method] = this.http[method];
    }
  }
}
