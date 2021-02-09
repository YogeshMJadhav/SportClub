import axios from 'axios';
import { commonUrl } from './commonUrl';

export function fetchFootballPlayersData() {
    return axios.get(`${commonUrl}Football`);
}

export function addFootballPlayersData(data) {
    return axios.post(`${commonUrl}Football`, data);
}

export function updateFootballPlayersData(id, data) {
    return axios.put(`${commonUrl}Football/${id}`, data);
}

export function deleteFootballPlayersData(id) {
    return axios.delete(`${commonUrl}Football${id}`);
}