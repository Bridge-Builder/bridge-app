import { createContext, FC, PropsWithChildren, useContext } from 'react';
import { ServiceAppProps, ServiceContext } from './ServiceApp.types';

const ServiceAppContext = createContext<ServiceContext>({} as ServiceContext);

export const ServiceAppProvider: FC<PropsWithChildren<ServiceAppProps>> = props => {
  const { children, config } = props;
  return <ServiceAppContext.Provider value={{ config }}>{children}</ServiceAppContext.Provider>;
};

export function useApp() {
  const { config } = useContext<ServiceContext>(ServiceAppContext);
  const { history } = config;

  return { history };
}
