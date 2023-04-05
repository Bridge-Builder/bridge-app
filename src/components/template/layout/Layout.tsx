import { FC, PropsWithChildren } from 'react';
import { LayoutProps } from './Layout.types';
import { DocMain, DocContainer } from '@/components/template/layout/Layout.styles';
import Header from '@/components/molecules/header/Header';
import Footer from '@/components/molecules/footer/Footer';
import { roboto } from '@/config/fontConfig';

const Layout: FC<PropsWithChildren<LayoutProps>> = props => {
  const { children } = props;
  return (
    <DocContainer className={roboto.className}>
      <Header />
      <DocMain>{children}</DocMain>
      <Footer />
    </DocContainer>
  );
};

export default Layout;
