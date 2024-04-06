import axios from "axios";

export const axiosDb = axios.create({
    baseURL: '//192.168.1.9:4000',
    timeout: 120000,
    headers: {
        "Content-Type": 'application/json',
    }
});
