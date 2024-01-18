import axios from "axios";

export const axiosInstance = axios.create({
  // using .env
  // baseURL: import.meta.env.VITE_BASE_API_URL,

  // not using .env
  baseURL: "https://www.themealdb.com/api/json/v1/1",
});
