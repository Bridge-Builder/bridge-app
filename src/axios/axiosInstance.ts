import axios from 'axios';
import { axiosConfig } from '@/config/axiosConfig';
import { API_ROUTE } from '@/config/apiConfig';

const axiosInstance = axios.create(axiosConfig);

export const get = <T>(url: API_ROUTE) => axiosInstance.get<T>(url);

export const post = <T>(url: API_ROUTE, data?: T) => axiosInstance.post<T>(url, data);

export const put = <T>(url: API_ROUTE, data?: T) => axiosInstance.put<T>(url, data);

export const deleteA = <T>(url: API_ROUTE) => axiosInstance.delete<T>(url);

export const patch = <T>(url: API_ROUTE, data?: T) => axiosInstance.patch<T>(url, data);
