import axios from 'axios';
// Create an axios instance
const apiClient = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: "bda61b9dcf5a4478bb113185ada96e10",
    },
});

export default apiClient;