import * as React from 'react';
import styled from 'styled-components';

import { NewsItemContainer } from './NewsItemContainer';
import { NewsListContainer } from './NewsListContainer';
import { Flex } from '../common/components/Flex';
import { Colors } from '../common/enums/colors';
import { Breakpoints } from '../common/enums/breakpoints';

export const News: React.FC = () => (
  <NewsStyled>
    <NewsItemStyled>
      <NewsWrapperStyled>
        <NewsItemContainer />
      </NewsWrapperStyled>
    </NewsItemStyled>
    <NewsListStyled>
      <NewsWrapperStyled>
        <NewsListContainer />
      </NewsWrapperStyled>
    </NewsListStyled>
  </NewsStyled>
);

const NewsStyled = styled(Flex)`
  height: 100%;
  width: 100%;
  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    flex-direction: column;
  } ;
`;

const NewsItemStyled = styled.div`
  width: 70%;
  border-right: 1px solid ${Colors.GRAY_34};
  height: 100%;
  overflow: auto;
  padding: 5rem;
  box-sizing: border-box;
  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    width: 100%;
    height: auto;
  }
`;

const NewsListStyled = styled.div`
  width: 30%;
  height: 100%;
  overflow: auto;
  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    width: 100%;
    height: auto;
  }
`;

const NewsWrapperStyled = styled.div`
  height: 100%;
`;
