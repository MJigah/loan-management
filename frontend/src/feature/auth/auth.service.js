import axios from 'axios'

const API_URL = 'http://localhost:4000/api/users/'

const register = async (userData) => {
    const response = await axios.post(`${API_URL}signup`, userData)

    if(response.data && response.data.token){
        localStorage.setItem('userToken', JSON.stringify(response.data.token))
    }

    return response.data
}


const login = async (userData) => {
    const response = await axios.post(`${API_URL}login`, userData)

    if(response.data && response.data.token){
        localStorage.setItem('userToken', JSON.stringify(response.data.token))
    }

    return response.data
}

const authService = {
    register,
    login
}

export default authService;