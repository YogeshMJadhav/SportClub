import axios from 'axios';
import { commonUrl } from './commonUrl';

export function fetchCricketPlayersData() {
    return axios.get(`${commonUrl}Cricket`);
}

export function addCricketPlayersData(data) {
    return axios.post(`${commonUrl}Cricket`, data);
}

export function updateCricketPlayersData(id, data) {
    return axios.put(`${commonUrl}Cricket/${id}`, data);
}

export function deleteCricketPlayersData(id) {
    return axios.delete(`${commonUrl}Cricket${id}`);
}