import axios from 'axios'

const instanse = axios.create({
    baseURL: "/api/",
});

export default instanse