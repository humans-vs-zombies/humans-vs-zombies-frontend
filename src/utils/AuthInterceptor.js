/*import axios from 'axios';
import UserService from '../services/UserService';

const AuthInterceptor = () => {
  const defaultOptions = {
    baseURL: process.env.REACT_APP_API_PATH,
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // Create instance
  let instance = axios.create(defaultOptions);

  // Set the AUTH token for any request
  instance.interceptors.request.use(function (config) {
    //const token = localStorage.getItem('token');
    const token = UserService.getToken();
    config.headers.Authorization =  token ? `Bearer ${token}` : '';
    config.headers['Access-Control-Allow-Origin'] = "*";
    config.headers['Access-Control-Allow-Methods'] =  "GET, POST, PUT, DELETE";
    config.headers['Access-Control-Allow-Headers'] =  "Authorization";

    return config;
  });

  return instance;
};

export default AuthInterceptor();*/

/*import axios from "axios";
import UserService from "./UserService";

const _axios = axios.create();

const configure = () => {*/
    /* 
        Intercepts and changes every request to API.
        Adds Authorization header with authentication token,
        and refreshes token.
    */
    /*_axios.interceptors.request.use((config) => {
        const cb = () => {
            config.headers.Authorization = "Bearer " + UserService.getToken();
            return Promise.resolve(config);
        };
        return UserService.updateToken(cb);
    })
};

const getAxiosClient = () => _axios;

const HttpService = {
    configure,
    getAxiosClient
}

export default HttpService;*/