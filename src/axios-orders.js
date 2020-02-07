import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://react-burger-b3f9f.firebaseio.com/'
});

export default instance;