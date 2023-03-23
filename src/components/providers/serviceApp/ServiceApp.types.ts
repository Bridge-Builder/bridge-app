export interface AppConfig {
  serviceName: string;
  routeConfig: [string, string][];
}

export interface ServiceAppProps {
  config: AppConfig;
}

export interface ServiceContext {
  config: AppConfig;
}
