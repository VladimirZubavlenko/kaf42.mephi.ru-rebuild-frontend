import * as React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { StringBoolean } from '../common/enums/stringBoolean';
import { Colors } from '../common/enums/colors';
import { Fonts } from '../common/enums/fonts';

export interface IProps extends React.AnchorHTMLAttributes<string> {
  children: React.ReactNode;
  active?: StringBoolean;
  to?: string;
}

export const MenuItemStyled: React.FC<IProps> = ({ to, href, active, children, target }) => {
  const ItemStyled = getItemStyled(!!to);

  return (
    <ItemStyled active={active} href={href} to={to} target={target}>
      {children}
    </ItemStyled>
  );
};

const getItemStyled = (isLink: boolean) => styled(isLink ? Link : 'a')<IProps>`
  color: ${(props) => (props.active === StringBoolean.TRUE ? Colors.GREEN : Colors.WHITE)};
  text-decoration: none;
  transition: opacity 0.3s ease, border-left-color 0.3s ease;
  height: 4.6rem;
  padding-left: 8rem;
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  font-weight: lighter;
  font-family: ${Fonts.PIXEL}, sans-serif;
  border-left: 5px solid ${Colors.BLACK};
  flex-shrink: 0;
  :hover {
    opacity: 0.8;
    border-left: 5px solid ${Colors.GREEN};
  }
  ${(props) =>
    props.active === StringBoolean.TRUE &&
    css`
      border-left: 5px solid ${Colors.GREEN};
      cursor: default;
      &:hover {
        opacity: 1;
      }
    `}
`;
