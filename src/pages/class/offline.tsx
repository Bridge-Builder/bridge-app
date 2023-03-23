import Head from 'next/head';
import { useApp } from '@/components/providers/serviceApp/ServiceApp';

export default function Offline() {
  const { headTitle } = useApp();
  return (
    <>
      <Head>
        <title>{headTitle}</title>
      </Head>
      <div>오프라인 강좌 페이지</div>
    </>
  );
}
