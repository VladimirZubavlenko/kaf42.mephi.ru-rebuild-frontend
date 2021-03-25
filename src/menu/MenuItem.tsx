import * as React from 'react';

import { Routes } from '../common/enums/routes';
import { getStringByBoolean } from '../common/helpers/getStringByBoolean';
import { MenuItemText } from './MenuItemText';
import { MenuItemStyled } from './MenuItemStyled';

export interface IProps {
  isActive: boolean;
  path: Routes;
}

export const MenuItem: React.FC<IProps> = ({ isActive, path, children }) => (
  <MenuItemStyled active={getStringByBoolean(isActive)} to={path}>
    <MenuItemText isActive={isActive}>{children}</MenuItemText>
  </MenuItemStyled>
);
