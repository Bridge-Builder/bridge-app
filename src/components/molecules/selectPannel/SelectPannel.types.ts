import { ROUTE } from '@/config/routeConfig';
import { StaticImageData } from 'next/image';

export interface SelectPannelProps {
  heroImg: StaticImageData;
  /**
   * 셀렉트 판넬의 버튼 링크를 지정합니다.
   */
  href: ROUTE;
  /**
   * 셀렉트 판넬의 제목을 지정합니다.
   */
  title: string;
  /**
   * 셀렉트 판넬의 설명문을 지정합니다.
   */
  description: string;
  /**
   * 버튼의 라벨을 지정합니다.
   */
  buttonLabel: string;
}
