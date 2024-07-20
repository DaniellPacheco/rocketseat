import axios from "axios";

export const api = axios.create({
  baseURL: 'http://localhost:3333',
  // withCredentials: true - se passar aqui, valerá para toda as requições da api
});