import { ROUTE } from '@/config/routeConfig';
export const appConfig = {
  serviceName: 'bridge-app',
  routeConfig: [
    [ROUTE.INDEX, '메인페이지'],
    [ROUTE.CLASS_OFFLINE, '오프라인 강좌 리스트'],
    [ROUTE.CLASS_ONLINE, '온라인 강좌 리스트'],
    [ROUTE.REGISTRATION, '강좌 등록'],
    [ROUTE.REGI_OFFLINE, '오프라인 강좌 등록'],
    [ROUTE.REGI_ONLINE, '온라인 강좌 등록']
  ]
};
