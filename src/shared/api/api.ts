import axios from 'axios';

import { BASE_URL } from '@/shared/config';

export const API = axios.create({ baseURL: BASE_URL, withCredentials: false });
