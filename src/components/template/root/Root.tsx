import { FC, PropsWithChildren } from 'react';
import { ServiceAppProvider } from '@/components/providers/serviceApp/ServiceApp';
import { appConfig } from '@/config/appConfig';

const Root: FC<PropsWithChildren> = props => {
  const { children } = props;
  return <ServiceAppProvider config={appConfig}>{children}</ServiceAppProvider>;
};

export default Root;
