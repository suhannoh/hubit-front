import axios from "axios";
const API_BASE = import.meta.env.VITE_API_BASE_URL;
const isDeploy = API_BASE?.startsWith('https://');
console.log(isDeploy ? 'prod' : 'dev');
export const api = axios.create({
  baseURL: API_BASE
})