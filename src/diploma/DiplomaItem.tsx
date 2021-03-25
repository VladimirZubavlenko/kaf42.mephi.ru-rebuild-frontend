import React from 'react';
import styled, { css } from 'styled-components';
import moment from 'moment';

import { IDiploma, IDiplomaFields } from './interfaces/IDiploma';
import { Flex } from '../common/components/Flex';
import { Colors } from '../common/enums/colors';
import { StringBoolean } from '../common/enums/stringBoolean';
import { getStringByBoolean } from '../common/helpers/getStringByBoolean';
import { getEducationNameByType } from '../common/helpers/getEducationNameByType';
import { EducationType } from '../common/enums/education-type.enum';

export interface IProps {
  item: IDiplomaFields | IDiploma;
  isHeader?: boolean;
}

export const DiplomaItem: React.FC<IProps> = ({ item, isHeader }) => (
  <DiplomaItemStyled isHeader={getStringByBoolean(isHeader)}>
    <DiplomaCellStyled type="long">{item.fullName}</DiplomaCellStyled>
    <DiplomaCellStyled type="long">{item.workName}</DiplomaCellStyled>
    <DiplomaCellStyled>{item.supervisor}</DiplomaCellStyled>
    <DiplomaCellStyled>
      {isHeader ? item.educationType : getEducationNameByType(item.educationType as EducationType)}
    </DiplomaCellStyled>
    <DiplomaCellStyled type="short">{item.grade}</DiplomaCellStyled>
    <DiplomaCellStyled type="short">{isHeader ? item.year : moment(item.year).format('Y')}</DiplomaCellStyled>
    <DiplomaCellStyled type="short">
      {isHeader ? (
        item.workFile
      ) : (
        <LinkStyled href={`${API_URL}/download/${item.workFile}`} target="_blank">
          Скачать
        </LinkStyled>
      )}
    </DiplomaCellStyled>
    <DiplomaCellStyled type="short">
      {isHeader ? (
        item.presentationFile
      ) : (
        <LinkStyled href={`${API_URL}/download/${item.presentationFile}`} target="_blank">
          Скачать
        </LinkStyled>
      )}
    </DiplomaCellStyled>
  </DiplomaItemStyled>
);

const DiplomaItemStyled = styled(Flex)<{ isHeader?: StringBoolean }>`
  width: 100%;
  border-bottom: 1px solid ${Colors.GRAY_34};
  padding: 5rem;
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
    `}
`;

const DiplomaCellStyled = styled(Flex)<{ type?: 'short' | 'long' }>`
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
