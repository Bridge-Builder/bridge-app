import { ROUTE } from '@/config/routeConfig';
export const appConfig = {
  serviceName: 'bridge',
  routeConfig: [
    [ROUTE.INDEX, '메인'],
    [ROUTE.CLASS_OFFLINE, '오프라인'],
    [ROUTE.CLASS_ONLINE, '온라인'],
    [ROUTE.REGISTRATION, '등록'],
    [ROUTE.REGI_OFFLINE, '오프라인 등록'],
    [ROUTE.REGI_ONLINE, '온라인 등록']
  ]
};
