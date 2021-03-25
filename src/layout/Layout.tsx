import * as React from 'react';
import styled from 'styled-components';

import { MenuContainer } from '../menu/MenuContainer';
import { Flex } from '../common/components/Flex';
import { Breakpoints } from '../common/enums/breakpoints';

export const Layout: React.FC = ({ children }) => (
  <LayoutStyled>
    <MenuContainer />
    <ContentStyled>{children}</ContentStyled>
  </LayoutStyled>
);

const LayoutStyled = styled(Flex)`
  height: 100%;
  overflow: auto;
  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    flex-direction: column;
  } ;
`;

const ContentStyled = styled.div`
  flex-grow: 1;
`;
