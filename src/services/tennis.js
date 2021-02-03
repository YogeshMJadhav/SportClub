import axios from 'axios';

export function fetchTennisData() {
    return axios.get('http://localhost:4000/Tennis');
}

export function addTennisData(data) {
    return axios.post('http://localhost:4000/Tennis', data)
}

export function deleteTennisData(id) {
    return axios.delete(`http://localhost:4000/Tennis/${id}`)
}

export function updateTennisData(id, data) {
    return axios.put(`http://localhost:4000/Tennis/${id}`, data)
}