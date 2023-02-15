import axios from 'axios'

const API_URL = process.env.NODE_ENV === "development" ? 'http://localhost:4000/api/loan/' : `https://loan-backend.onrender.com/api/loan/`;
// const API_URL = 'http://localhost:4000/api/loan/';

const create = async (loanData) => {
    const response = await axios.post(`${API_URL}`, loanData)

    return response.data;
}

const authService = {
    create,
}

export default authService;