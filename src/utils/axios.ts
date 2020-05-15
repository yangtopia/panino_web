import axios, { AxiosInstance } from 'axios';

let _instance: AxiosInstance;

function configureAxios() {
  if (_instance) {
    return _instance;
  }

  _instance = axios.create();
  return _instance;
}

export default configureAxios();
