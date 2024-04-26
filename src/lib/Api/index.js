import axios from "axios"

const API_BASE_URL = 'https://api.spacexdata.com/v4'

export const GetAllRocketsApi = () => {
    return axios.get(`${API_BASE_URL}/capsules`)
}