import axios from "axios";
const API_BASE = import.meta.env.VITE_API_BASE_URL;

export const api = axios.create({
  baseURL: 'http://localhost:8080'
})