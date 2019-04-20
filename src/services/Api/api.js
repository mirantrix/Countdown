import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://codejump.herokuapp.com/'
});

const getMatches = () => axiosInstance.get('https://codejump.herokuapp.com/matches/fmf');

export default {
  getMatches
};
