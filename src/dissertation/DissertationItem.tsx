import React from 'react';
import styled, { css } from 'styled-components';
import moment from 'moment';
import { FormattedMessage } from 'react-intl';
import { IDissertation, IDissertationFields } from './interfaces/IDissertation';
import { getStringByBoolean } from '../common/helpers/getStringByBoolean';
import { Flex } from '../common/components/Flex';
import { StringBoolean } from '../common/enums/stringBoolean';
import { Colors } from '../common/enums/colors';
import { Breakpoints } from '../common/enums/breakpoints';

export interface IProps {
  item: IDissertationFields | IDissertation;
  isHeader?: boolean;
}
// fullName: 'ФИО Соискателя',
//   academicDegree: 'Степень',
//   defendPlace: 'Место защиты',
//   defendDate: 'Год защиты',
//   theme: 'Тема',
//   supervisor: 'Научный руководитель',
//   autoRefFile: 'Автореферат',
//   dissertationFile: 'Работа',
export const DissertationItem: React.FC<IProps> = ({ item, isHeader }) => (
  <DissertationItemStyled isHeader={getStringByBoolean(isHeader)}>
    <DissertationCellStyled type="long">{item.fullName}</DissertationCellStyled>
    <DissertationCellStyled type="long">{item.theme}</DissertationCellStyled>
    <DissertationCellStyled>{item.academicDegree}</DissertationCellStyled>
    <DissertationCellStyled type="long">{item.defendPlace}</DissertationCellStyled>
    <DissertationCellStyled type="short">
      {isHeader ? item.defendDate : moment(item.defendDate).format('Y')}
    </DissertationCellStyled>
    <DissertationCellStyled>
      {isHeader
        ? item.dissertationFile
        : item.dissertationFile !== 'null' && (
            <LinkStyled href={`/api/download/${item.dissertationFile}`} target="_blank">
              <FormattedMessage id="dissertation.download" />
            </LinkStyled>
          )}
    </DissertationCellStyled>
    <DissertationCellStyled>
      {isHeader
        ? item.autoRefFile
        : item.autoRefFile !== 'null' && (
            <LinkStyled href={`/api/download/${item.autoRefFile}`} target="_blank">
              <FormattedMessage id="dissertation.download" />
            </LinkStyled>
          )}
    </DissertationCellStyled>
  </DissertationItemStyled>
);

const DissertationItemStyled = styled(Flex)<{ isHeader?: StringBoolean }>`
  width: 100%;
  border-bottom: 1px solid ${Colors.GRAY_34};
  padding: 5rem;
  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    flex-direction: column;
  }
  align-items: start;
  ${(props) =>
    props.isHeader === StringBoolean.TRUE &&
    css`
      padding: 3rem 5rem;
      align-items: center;
      font-weight: bold;
      position: sticky;
      top: 0;
      background: black;
      @media screen and (max-width: ${Breakpoints.MOBILE}px) {
        align-items: start;
      } ;
    `}
`;

const DissertationCellStyled = styled(Flex)<{ type?: 'short' | 'long' }>`
  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    padding: 1rem;
    width: 100%;
  }
  padding-right: 1rem;
  flex-shrink: 0;
  width: ${(props) => (!props.type ? '12%' : props.type === 'short' ? '8%' : '20%')};
`;

const LinkStyled = styled.a`
  color: ${Colors.GREEN};
  text-decoration: underline;
  cursor: pointer;
  :hover {
    text-decoration: none;
  }
`;
