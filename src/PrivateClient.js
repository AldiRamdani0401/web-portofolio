import axios from 'axios';

const PrivateClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,  // Menggunakan import.meta.env untuk Vite
  headers: {
    'api-key': import.meta.env.VITE_API_KEY,
    'Content-Type': 'application/json',
  },
});

export default PrivateClient;
