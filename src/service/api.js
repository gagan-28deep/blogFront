import axios from "axios";

const backend_url = String(import.meta.env.VITE_BACKEND_URL);

const axiosInstance = axios.create({
  baseURL: backend_url,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Take 2 callback functions
axiosInstance.interceptors.request.use(
  // In the case of success
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    // we can also stop the loader here
    return Promise.resolve(processResponse(response));
  },
  function (error) {
    return Promise.reject(processError(error));
  }
);

const processResponse = (response) => {
  if (response?.status === 200) {
    return { isSuccess: true, data: response?.data };
  } else {
    return {
      isFailure: true,
      status: response?.status,
      code: response?.code,
      msg: response?.msg,
    };
  }
};

const processError = (error) => {
    
};
