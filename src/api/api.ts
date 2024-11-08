import axios, { AxiosResponse } from "axios";


export const baseUrl = import.meta.env.VITE_REACT_APP_API_URL + '/api/';
export const refreshInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const instance = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

instance.interceptors.request.use(
  async (config) => {
    if (localStorage.access_token) {
      config.headers.authorization = `Bearer ${localStorage.access_token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error?.response?.status === 401) {
      if (localStorage.getItem('access_token')) {
        return refreshInstance.post("/profile/refresh", {}, {
          headers: {
            'authorization': `Bearer ${localStorage.getItem('access_token')}`,
          }
        }).then(responseRefreshToken => {
          if (responseRefreshToken?.data?.authorization.token) {
            localStorage.setItem('access_token', responseRefreshToken.data.authorization.token)
            error.config.headers.authorization = `Bearer ${responseRefreshToken.data.authorization.token}`;

            return instance.request(error.config);
          }
        }).catch(error => {
          if (
            error?.response?.data.message === 'The token has been blacklisted'
            || error?.response?.data.message === 'Token has expired and can no longer be refreshed'
            || error?.response?.data.message === 'Token could not be parsed from the request.'
            || error?.response.data?.code === 500
          ) {
            localStorage.removeItem('access_token');
            window.location.href = "/";
            console.error(error?.response.data)
            return Promise.reject(error);
          }
        })
      }
    }
    else if (error?.response?.data.message === 'The token has been blacklisted' || error?.response?.status === 401) {
      localStorage.removeItem('access_token');
      console.error(error?.response?.data.message, 'The token has been blacklisted', error?.response?.status, 401,)
      window.location.href = "/";
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);

export const api = {
};

export const axiosResponseHandler = (response: AxiosResponse<any, any>) => {
  return response.data;
};

export const axiosResponseHandlerWithAuth = (response: AxiosResponse<any, any>) => {
  if (response.data?.authorization && response.data?.authorization?.token) {
    localStorage.setItem('access_toke', response.data?.authorization?.token);
  }
  return response.data;
};

export const axiosErrorHandler = (error: any) => {
  return error?.response?.data;
};

export const headerMultipart = {
  headers: {
    'content-type': 'multipart/form-data'
  },
};

export const successStatus = 'success';