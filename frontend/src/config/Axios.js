import axios from 'axios';

const instanceApi = axios.create({baseURL:"https://cr.net.ar/apis/"});

export default instanceApi;