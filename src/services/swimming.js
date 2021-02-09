import axios from 'axios';
import { commonUrl } from './commonUrl';

export function fetchSwimmingPlayersData() {
    return axios.get(`${commonUrl}Swimming`);
}

export function addSwimmingPlayersData(data) {
    return axios.post(`${commonUrl}Swimming`, data);
}

export function updateSwimmingPlayersData(id, data) {
    return axios.put(`${commonUrl}Swimming/${id}`, data);
}

export function deleteSwimmingPlayersData(id) {
    return axios.delete(`${commonUrl}Swimming${id}`);
}