import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://apijump.herokuapp.com/'
});

const getMatches = () => axiosInstance.get('https://apijump.herokuapp.com/matches/fmf');

export default {
  getMatches
};
