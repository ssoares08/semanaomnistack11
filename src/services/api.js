import axios from 'axios';

const api = axios.create({
<<<<<<< HEAD
    baseURL: 'http://192.168.1.111:3333'
});
=======
    baseURL: 'http://localhost:3333',
})
>>>>>>> bc3e819ec674162ecb51fe79b4315e13b4e70d26

export default api;