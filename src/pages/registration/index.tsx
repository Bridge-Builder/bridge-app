import Head from 'next/head';
import { ArticleRegistration, BoxSelectPannel } from '@/styles/pages/Registration.styles';
import { useApp } from '@/components/providers/serviceApp/ServiceApp';
import { SelectPannel } from '@/components/molecules/selectPannel/SelectPannel';
import { ROUTE } from '@/config/routeConfig';
import onlineImgPath from '../../../public/images/online_registration.jpg';
import offlineImgPath from '../../../public/images/offline_registration.jpg';

export default function Registration() {
  const { headTitle } = useApp();

  return (
    <>
      <Head>
        <title>{headTitle || ''}</title>
      </Head>
      <ArticleRegistration>
        <BoxSelectPannel>
          <SelectPannel
            heroImg={onlineImgPath}
            href={ROUTE.REGI_ONLINE}
            title={'온라인'}
            description={'온라인 강의를 등록합니다.'}
            buttonLabel={'온라인 강의 등록'}
          />
          <SelectPannel
            heroImg={offlineImgPath}
            href={ROUTE.REGI_OFFLINE}
            title={'오프라인'}
            description={'오프라인 강의를 등록합니다.'}
            buttonLabel={'오프라인 강의 등록'}
          />
        </BoxSelectPannel>
      </ArticleRegistration>
    </>
  );
}
