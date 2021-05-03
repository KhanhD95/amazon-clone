import axios from "axios";

const instance = axios.create({
    baseURL:'http://localhost:5001/onlineretail-project/us-central1/api' // THE API (Cloud Function)URL
});

export default instance;