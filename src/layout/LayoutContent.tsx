import React from 'react';
import styled from 'styled-components';

import { Colors } from '../common/enums/colors';
import { Flex } from '../common/components/Flex';
import { Fonts } from '../common/enums/fonts';
import { Breakpoints } from '../common/enums/breakpoints';

export interface IProps {
  title: string;
}

export const LayoutContent: React.FC<IProps> = ({ title, children }) => (
  <LayoutContentStyled>
    <TitleStyled>{title}</TitleStyled>
    <ContentStyled>{children}</ContentStyled>
  </LayoutContentStyled>
);

const TitleStyled = styled.div`
  font-size: 3rem;
  font-weight: lighter;
  letter-spacing: 0.1rem;
  padding: 5rem;
  font-family: ${Fonts.PIXEL}, sans-serif;
  border-bottom: 1px solid ${Colors.GRAY_34};
  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    font-size: 2rem;
  } ;
`;

const LayoutContentStyled = styled(Flex)`
  height: 100%;
  overflow: auto;
  flex-direction: column;
`;

const ContentStyled = styled(Flex)`
  flex-grow: 1;
  height: 100%;
  overflow: auto;
`;
