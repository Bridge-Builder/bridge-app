import { ROUTE } from '@/config/routeConfig';

type RouteConfig = [ROUTE, string][];

export interface AppConfig {
  serviceName: string;
  routeConfig: RouteConfig;
}

export interface ServiceAppProps {
  config: AppConfig;
}

export interface ServiceContext {
  config: AppConfig;
}
