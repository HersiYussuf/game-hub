import axios from "axios";
// Uncomment the following line if you're using Doppler for managing environment variables
// import doppler from "../doppler/DopplerContext";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    // Use import.meta.env to access environment variables in Vite
    key: import.meta.env.VITE_REACT_APP_RAWG_API_KEY,
  },
});
