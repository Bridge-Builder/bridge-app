import { ROUTE } from '@/config/routeConfig';

export interface AppConfig {
  serviceName: string;
  routeConfig: [ROUTE, string][];
}

export interface ServiceAppProps {
  config: AppConfig;
}

export interface ServiceContext {
  config: AppConfig;
}
