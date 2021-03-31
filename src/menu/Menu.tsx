import * as React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import logo from '../assets/img/logo.png';
import { Routes } from '../common/enums/routes';
import { Colors } from '../common/enums/colors';
import { Flex } from '../common/components/Flex';
import { MenuItem } from './MenuItem';
import { Fonts } from '../common/enums/fonts';
import { MenuExternalLinkItem } from './MenuExternalLinkItem';
import { IStateProps } from './MenuContainer';
import { LocaleContext } from '../App';

export const Menu: React.FC<IStateProps> = ({ activeUrl }) => (
  <LocaleContext.Consumer>
    {(value) => (
      <MenuStyled>
        <MenuStyledWrapper>
          <LogoWrapper>
            <a href="/">
              <img src={logo} width="150" height="90" alt="Logo" />
            </a>
          </LogoWrapper>
          <ListWrapper>
            <MenuItem isActive={activeUrl === Routes.ROOT} path={Routes.ROOT}>
              <FormattedMessage id="menu.main" />
            </MenuItem>
            <MenuItem isActive={activeUrl === Routes.EMPLOYEE} path={Routes.EMPLOYEE}>
              <FormattedMessage id="menu.employee" />
            </MenuItem>
            <MenuExternalLinkItem path="https://is.mephi.ru">
              <FormattedMessage id="menu.bachelor" />
            </MenuExternalLinkItem>
            <MenuExternalLinkItem path="https://is.mephi.ru/masters">
              <FormattedMessage id="menu.master" />
            </MenuExternalLinkItem>
            <MenuExternalLinkItem path="https://ikaf42.ru">
              <FormattedMessage id="menu.ikaf42" />
            </MenuExternalLinkItem>
            <MenuItem isActive={activeUrl === Routes.NEWS} path={Routes.NEWS}>
              <FormattedMessage id="menu.news" />
            </MenuItem>
            {/* <MenuItem */}
            {/*  isActive={activeUrl === Routes.DIPLOMA} */}
            {/*  path={Routes.DIPLOMA} */}
            {/* > */}
            {/*  Примеры дипломов */}
            {/* </MenuItem> */}
            <MenuItem isActive={activeUrl === Routes.EMPLOYER} path={Routes.EMPLOYER}>
              <FormattedMessage id="menu.employer" />
            </MenuItem>
            <MenuItem isActive={activeUrl === Routes.DISSERTATION} path={Routes.DISSERTATION}>
              <FormattedMessage id="menu.dissertation" />
            </MenuItem>
            <MenuItem isActive={activeUrl === Routes.FEEDBACK} path={Routes.FEEDBACK}>
              <FormattedMessage id="menu.contacts" />
            </MenuItem>
            <MenuExternalLinkItem path="https://www.instagram.com/kaf42_mephi/">
              <FormattedMessage id="menu.instagram" />
            </MenuExternalLinkItem>
            <MenuExternalLinkItem path="https://www.youtube.com/channel/UCa0DZcD7wm2QNs5G_n-G6xw/featured">
              <FormattedMessage id="menu.youtube" />
            </MenuExternalLinkItem>
            <Button onClick={() => value.toggleLocale()}>
              <FormattedMessage id="menu.lang" />
            </Button>
            {/*        <MenuItem
          isActive={activeUrl === Routes.RESEARCHTEAM}
          path={Routes.RESEARCHTEAM}
        >
          Research Team
        </MenuItem> */}
          </ListWrapper>
          <BottomWrapper>{new Date().getFullYear()} ©</BottomWrapper>
        </MenuStyledWrapper>
      </MenuStyled>
    )}
  </LocaleContext.Consumer>
);

const MenuStyled = styled(Flex)`
  width: 40rem;
  height: 100%;
  border-right: 1px solid ${Colors.GRAY_34};
  overflow: auto;
  flex-shrink: 0;
`;

const Button = styled.a`
  color: ${Colors.WHITE};
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
    cursor: pointer;
  }
`;

const MenuStyledWrapper = styled(Flex)`
  flex-direction: column;
  min-height: 80rem;
  width: 100%;
`;

const LogoWrapper = styled(Flex)`
  padding: 5rem 0;
  justify-content: center;
  font-family: ${Fonts.PIXEL}, sans-serif;
`;

const ListWrapper = styled(Flex)`
  height: 60%;
  justify-content: center;
  flex-direction: column;
  flex-grow: 1;
`;

const BottomWrapper = styled.div`
  height: 5rem;
  text-align: center;
  font-family: ${Fonts.PIXEL}, sans-serif;
`;
