import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://next-fc.herokuapp.com/'
});

const getMatches = () => axiosInstance.get('https://next-fc.herokuapp.com/matches/fmf');

export default {
  getMatches
};
