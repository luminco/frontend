import axios from 'axios';

// Create an instance of Axios
const axiosInstance = axios.create({
  baseURL: 'https://lumin-backend-v1.onrender.com/api',
  withCredentials: true,
  timeout: 15000, // 15s timeout so it doesn't hang forever
});

// Attach JWT token from localStorage on every request
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
