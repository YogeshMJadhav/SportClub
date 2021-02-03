import axios from 'axios';

export function fetchSwimmingPlayersData() {
    return axios.get('http://localhost:4000/Swimming');
}

export function addSwimmingPlayersData(data) {
    return axios.post('http://localhost:4000/Swimming', data);
}

export function updateSwimmingPlayersData(id, data) {
    return axios.put(`http://localhost:4000/Swimming/${id}`, data);
}

export function deleteSwimmingPlayersData(id) {
    return axios.delete(`http://localhost:4000/Swimming${id}`);
}