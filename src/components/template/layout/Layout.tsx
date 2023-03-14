import { FC, PropsWithChildren } from 'react';
import { LayoutProps } from './Layout.types';
import { MainContainer } from '@/components/template/layout/Layout.styles';
import Header from '@/components/molecules/header/Header';
import Footer from '@/components/molecules/footer/Footer';

const Layout: FC<PropsWithChildren<LayoutProps>> = props => {
  const { children } = props;
  return (
    <>
      <Header />
      <MainContainer>{children}</MainContainer>
      <Footer />
    </>
  );
};

export default Layout;
