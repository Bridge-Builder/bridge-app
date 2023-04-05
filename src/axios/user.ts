import { get, post } from './axiosInstance';
import { API_ROUTE } from '@/config/apiConfig';

export const fetchPostUserJoin = (body: any) => post(API_ROUTE.USER_JOIN, body);

export const fetchUserInfo = () => get(API_ROUTE.USER_INFO);
