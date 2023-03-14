import { FC } from 'react';
import { HeaderProps } from './Header.types';
import { HeaderContainer } from '@/components/molecules/header/Header.styles';

const Header: FC<HeaderProps> = props => {
  const {} = props;
  return <HeaderContainer>{'헤더 영역입니다.'}</HeaderContainer>;
};
export default Header;
