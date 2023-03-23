import { FC } from 'react';
import { FooterContainer, InnerFooter } from '@/components/molecules/footer/Footer.styles';
import { FooterProps } from '@/components/molecules/footer/Footer.types';

const Footer: FC<FooterProps> = props => {
  const {} = props;
  return (
    <FooterContainer>
      <InnerFooter>{'© Bridge Corp. All rights reserved.'}</InnerFooter>
    </FooterContainer>
  );
};

export default Footer;
