import * as React from 'react';

import { MenuItemText } from './MenuItemText';
import { MenuItemStyled } from './MenuItemStyled';

interface IProps {
  path: string;
}

export const MenuExternalLinkItem: React.FC<IProps> = ({ path, children }) => (
  <MenuItemStyled target="_blank" href={path}>
    <MenuItemText isActive={false}>{children}</MenuItemText>
  </MenuItemStyled>
);
