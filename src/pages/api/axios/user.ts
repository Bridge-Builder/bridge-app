import { instance } from '@/pages/api/axios/axiosInstance';
import { API_ROUTE } from '@/pages/api/interface/route';

export const fetchPostUserJoin = (body: any) => instance.post(API_ROUTE.USER_JOIN, body);
