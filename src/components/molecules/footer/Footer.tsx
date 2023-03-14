import { FC } from 'react';
import { FooterContainer } from '@/components/molecules/footer/Footer.styles';
import { FooterProps } from '@/components/molecules/footer/Footer.types';

const Footer: FC<FooterProps> = props => {
  const {} = props;
  return <FooterContainer>{'풋터 영역입니다.'}</FooterContainer>;
};

export default Footer;
