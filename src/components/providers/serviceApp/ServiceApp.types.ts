import { BrowserHistory } from 'history';

export interface AppConfig {
  history: BrowserHistory;
}

export interface ServiceAppProps {
  config: AppConfig;
}

export interface ServiceContext {
  config: AppConfig;
}
