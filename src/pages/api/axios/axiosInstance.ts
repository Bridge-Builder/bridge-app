import axios from 'axios';
import { config } from '@/pages/api/axios/config';

export const instance = axios.create(config);
