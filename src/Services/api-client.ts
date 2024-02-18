import axios from 'axios';

interface ClientOptions {
    BASE_URL: string;
    RAWG_API_KEY: string;
}

// Assume you have the Doppler secrets available in process.env
const dopplerSecrets: ClientOptions = {
    BASE_URL: process.env.BASE_URL || '',
    RAWG_API_KEY: process.env.RAWG_API_KEY || '',
};

const apiClient = (options?: ClientOptions) => {
    // Merge Doppler secrets with options if provided
    const mergedOptions = { ...dopplerSecrets, ...options };

    return axios.create({
        baseURL: mergedOptions.BASE_URL,
        params: {
            key: mergedOptions.RAWG_API_KEY,
        },
    });
};

export default apiClient;
