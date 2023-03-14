import { FC, PropsWithChildren } from 'react';
import { createBrowserHistory } from 'history';
import { ServiceAppProvider } from '@/components/providers/serviceApp/ServiceApp';

const history = createBrowserHistory();

const appConfig = {
  history
};
const Root: FC<PropsWithChildren> = props => {
  const { children } = props;
  return <ServiceAppProvider config={appConfig}>{children}</ServiceAppProvider>;
};

export default Root;
