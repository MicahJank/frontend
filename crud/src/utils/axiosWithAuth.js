import axios from 'axios';

const axiosWithAuth = () => {
    const token = localStorage.getItem ('token');

    return axios.create ({
        baseURL: 'https://hacker-news-troll.herokuapp.com/api', 
        headers: {
            Authorization: `Bearer ${token}`,
        } 
   })
}

export default axiosWithAuth;