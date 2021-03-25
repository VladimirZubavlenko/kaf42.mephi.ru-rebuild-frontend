import React from 'react';
import styled from 'styled-components';

import { Colors } from '../common/enums/colors';
import { Flex } from '../common/components/Flex';

export interface IProps {
  title: string;
}

export const EmployeeItemListItem: React.FC<IProps> = ({ title, children }) => (
  <ItemStyled>
    <TitleStyled>{title}</TitleStyled>
    <TextStyled>{children}</TextStyled>
  </ItemStyled>
);

const TitleStyled = styled.div``;

const ItemStyled = styled(Flex)`
  border-bottom: 1px solid ${Colors.GRAY_34};
  justify-content: space-between;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  font-size: 1.2rem;
  color: ${Colors.GRAY_145};
  :last-child {
    border-bottom: none;
  }
`;

const TextStyled = styled.div`
  width: 50%;
  text-align: right;
  line-height: 1.4;
`;
