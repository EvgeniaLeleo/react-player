import axios from 'axios';
import { TSong } from '../types';

export const fetchTracks = () => {
  return axios
    .get<TSong[]>('http://51.250.72.80:8090/catalog/track/all/')
    .then((res) => res.data);
};
