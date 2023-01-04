import axios from 'axios'

const API_URL = process.env.NODE_ENV === "development" ? 'http://localhost:4000/api/users/' : `${process.env.PROXY_URI}api/users`;

const register = async (userData) => {
    const response = await axios.post(`${API_URL}signup`, userData)

    if(response.data && response.data.token){
        localStorage.setItem('userToken', JSON.stringify(response.data.token))
    }

    return response.data;
}


const login = async (userData) => {
    const response = await axios.post(`${API_URL}login`, userData)

    if(response.data && response.data.token){
        localStorage.setItem('userToken', JSON.stringify(response.data.token))
    }

    return response.data;
}

const getDetails = async (token) => {
    console.log(API_URL);
    const config = {
        headers : {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(`${API_URL}`, config)

    if(response.data && response.data.message){
        localStorage.setItem('user', JSON.stringify(response.data.message))
    }

    return response.data;
}

const authService = {
    register,
    login,
    getDetails
}

export default authService;