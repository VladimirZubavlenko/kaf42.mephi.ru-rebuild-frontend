import * as React from 'react';
import styled from 'styled-components';

import logo from '../assets/img/logo.png';
import { Routes } from '../common/enums/routes';
import { Colors } from '../common/enums/colors';
import { Flex } from '../common/components/Flex';
import { MenuItem } from './MenuItem';
import { Fonts } from '../common/enums/fonts';
import { MenuExternalLinkItem } from './MenuExternalLinkItem';
import { IStateProps } from './MenuContainer';

export const Menu: React.FC<IStateProps> = ({ activeUrl }) => (
  <MenuStyled>
    <MenuStyledWrapper>
      <LogoWrapper>
        <a href="/">
          <img src={logo} width="150" height="90" alt="Logo" />
        </a>
      </LogoWrapper>
      <ListWrapper>
        <MenuItem isActive={activeUrl === Routes.ROOT} path={Routes.ROOT}>
          Главная
        </MenuItem>
        <MenuItem isActive={activeUrl === Routes.EMPLOYEE} path={Routes.EMPLOYEE}>
          Сотрудники
        </MenuItem>
        <MenuExternalLinkItem path="https://is.mephi.ru">Бакалавриат</MenuExternalLinkItem>
        <MenuExternalLinkItem path="https://is.mephi.ru/masters">Магистратура</MenuExternalLinkItem>
        <MenuExternalLinkItem path="https://ikaf42.ru">Личный кабинет</MenuExternalLinkItem>
        <MenuItem isActive={activeUrl === Routes.NEWS} path={Routes.NEWS}>
          Новости
        </MenuItem>
        {/* <MenuItem */}
        {/*  isActive={activeUrl === Routes.DIPLOMA} */}
        {/*  path={Routes.DIPLOMA} */}
        {/* > */}
        {/*  Примеры дипломов */}
        {/* </MenuItem> */}
        <MenuItem isActive={activeUrl === Routes.EMPLOYER} path={Routes.EMPLOYER}>
          Работодатели
        </MenuItem>
        <MenuItem isActive={activeUrl === Routes.DISSERTATION} path={Routes.DISSERTATION}>
          Диссертации
        </MenuItem>
        <MenuItem isActive={activeUrl === Routes.FEEDBACK} path={Routes.FEEDBACK}>
          Обратная связь
        </MenuItem>
        <MenuExternalLinkItem path="https://www.instagram.com/kaf42_mephi/">Instagram</MenuExternalLinkItem>
        <MenuExternalLinkItem path="https://www.youtube.com/channel/UCa0DZcD7wm2QNs5G_n-G6xw/featured">
          YouTube
        </MenuExternalLinkItem>
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
);

const MenuStyled = styled(Flex)`
  width: 40rem;
  height: 100%;
  border-right: 1px solid ${Colors.GRAY_34};
  overflow: auto;
  flex-shrink: 0;
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
