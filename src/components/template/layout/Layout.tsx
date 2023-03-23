import { FC, PropsWithChildren } from 'react';
import { LayoutProps } from './Layout.types';
import { DocMain, DocContainer } from '@/components/template/layout/Layout.styles';
import Header from '@/components/molecules/header/Header';
import Footer from '@/components/molecules/footer/Footer';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin']
});

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
