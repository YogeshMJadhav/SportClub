import axios from 'axios';

export function fetchCricketPlayersData() {
    return axios.get('http://localhost:4000/Cricket');
}

export function addCricketPlayersData(data) {
    return axios.post('http://localhost:4000/Cricket', data);
}

export function updateCricketPlayersData(id, data) {
    return axios.put(`http://localhost:4000/Cricket/${id}`, data);
}

export function deleteCricketPlayersData(id) {
    return axios.delete(`http://localhost:4000/Cricket${id}`);
}