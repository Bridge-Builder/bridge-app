import '@/styles/reset.css';
import type { AppProps } from 'next/app';
import Layout from '@/components/template/layout/Layout';
import Root from '@/components/template/root/Root';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Root>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Root>
  );
}
