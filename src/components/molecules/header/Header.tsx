import { FC, useState } from 'react';
import Link from 'next/link';
import { HeaderProps } from './Header.types';
import {
  DocGnb,
  DocTitle,
  HeaderContainer,
  HeadUtils,
  InnerHeader,
  MenuList,
  StyledLink,
  SubMenus,
  UnOrderList
} from '@/components/molecules/header/Header.styles';
import { ROUTE } from '@/config/routeConfig';
// import { GiHamburgerMenu } from 'react-icons/gi';

const Header: FC<HeaderProps> = props => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <HeaderContainer>
      <InnerHeader>
        <DocTitle>
          <StyledLink href={ROUTE.INDEX}>{'Bridge'}</StyledLink>
        </DocTitle>
        <DocGnb role={'navigation'}>
          <UnOrderList>
            <MenuList>브릿지란?</MenuList>
            <MenuList>
              <StyledLink href={''} onClick={() => setIsVisible(prev => !prev)}>
                강좌
              </StyledLink>
              {isVisible && (
                <SubMenus>
                  <ul>
                    <li>
                      <StyledLink href={ROUTE.CLASS_OFFLINE} onClick={() => setIsVisible(false)}>
                        오프라인
                      </StyledLink>
                    </li>
                    <li>
                      <StyledLink
                        href={ROUTE.CLASS_ONLINE}
                        onClick={() => setIsVisible(false)}
                        onBlur={() => setIsVisible(false)}
                      >
                        온라인
                      </StyledLink>
                    </li>
                  </ul>
                </SubMenus>
              )}
            </MenuList>
            <MenuList>
              <StyledLink href={ROUTE.REGISTRATION}>강좌 등록</StyledLink>
            </MenuList>
            <MenuList>장소 대관</MenuList>
          </UnOrderList>
        </DocGnb>
        <HeadUtils>{'헤드 유틸영역'}</HeadUtils>
      </InnerHeader>
    </HeaderContainer>
  );
};
export default Header;
