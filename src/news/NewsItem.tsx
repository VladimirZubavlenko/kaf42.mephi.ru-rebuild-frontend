import React from 'react';
import parse from 'html-react-parser';

import styled from 'styled-components';
import { FetchingStatuses } from '../common/enums/fetchingStatuses';
import { Colors } from '../common/enums/colors';
import { IDispatchProps, IStateProps } from './NewsItemContainer';

export const NewsItem: React.FC<IStateProps & IDispatchProps> = ({ item, status, getActive }) => {
  React.useEffect(() => {
    if (status === FetchingStatuses.NONE) {
      getActive();
    }
  }, [getActive, status]);

  return <NewsStyled>{item && parse(item.body)}</NewsStyled>;
};

const NewsStyled = styled.div`
  h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 2rem;
  }
  line-height: 1.4;
  a {
    color: ${Colors.WHITE};
  }
`;
