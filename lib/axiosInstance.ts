import axios from "axios";

const api = axios.create({
    withCredentials: true, // Enables sending cookies with cross-origin requests
});

export default api;
