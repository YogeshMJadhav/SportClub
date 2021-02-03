import axios from 'axios';

export function fetchFootballPlayersData() {
    return axios.get('http://localhost:4000/Football');
}

export function addFootballPlayersData(data) {
    return axios.post('http://localhost:4000/Football', data);
}

export function updateFootballPlayersData(id, data) {
    return axios.put(`http://localhost:4000/Football/${id}`, data);
}

export function deleteFootballPlayersData(id) {
    return axios.delete(`http://localhost:4000/Football${id}`);
}