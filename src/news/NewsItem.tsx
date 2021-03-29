import React from 'react';
import parse from 'html-react-parser';

import styled from 'styled-components';
import { useIntl } from 'react-intl';
import { Colors } from '../common/enums/colors';
import { IDispatchProps, IStateProps } from './NewsItemContainer';

export const NewsItem: React.FC<IStateProps & IDispatchProps> = ({ item, status, getActive }) => {
  const locale = useIntl();

  React.useEffect(() => {
    getActive(null, locale.locale);
  }, [getActive, locale]);

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
