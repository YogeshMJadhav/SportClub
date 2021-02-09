import axios from 'axios';
import { commonUrl } from './commonUrl';

export function fetchTennisData() {
    return axios.get(`${commonUrl}Tennis`);
}

export function addTennisData(data) {
    return axios.post(`${commonUrl}Tennis`, data)
}

export function deleteTennisData(id) {
    return axios.delete(`${commonUrl}Tennis/${id}`)
}

export function updateTennisData(id, data) {
    return axios.put(`${commonUrl}Tennis/${id}`, data)
}