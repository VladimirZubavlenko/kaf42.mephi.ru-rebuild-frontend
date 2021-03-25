import React from 'react';
import styled from 'styled-components';

import { IEmployee } from './interfaces/IEmployee';
import { EmployeeItemListItem } from './EmployeeItemListItem';
import { EmployeeItemListItemSubject } from './EmployeeItemListItemSubject';
import { Flex } from '../common/components/Flex';
import { EmployeeTypeEnum } from './enums/EmployeeTypeEnum';
import { Colors } from '../common/enums/colors';

export interface IProps {
  item: IEmployee;
}

export const EmployeeItem: React.FC<IProps> = ({ item }) => (
  <ItemStyled>
    <TitleStyled>
      {item.fullName}
      {item.type !== EmployeeTypeEnum.NONE && (
        <SubTitleStyled>
          {item.type === EmployeeTypeEnum.GENERAL && 'Заведующий кафедрой'}
          {item.type === EmployeeTypeEnum.SUBGENERAL && 'Заместитель заведующего кафедрой'}
          {item.type === EmployeeTypeEnum.SECRETARY && 'Секретарь'}
        </SubTitleStyled>
      )}
    </TitleStyled>
    <div>
      <EmployeeItemListItem title="Ученая степень">{item.rank}</EmployeeItemListItem>
      <EmployeeItemListItem title="Должность">{item.position}</EmployeeItemListItem>
      <EmployeeItemListItem title="Место работы">{item.job}</EmployeeItemListItem>
      {item.subjects[0] !== '' && (
        <EmployeeItemListItemSubject title="Дисциплины">{item.subjects.join(', ')}</EmployeeItemListItemSubject>
      )}
    </div>
  </ItemStyled>
);

const TitleStyled = styled.div`
  font-size: 2rem;
  margin-bottom: 2rem;
  font-weight: lighter;
`;

const SubTitleStyled = styled.div`
  font-size: 1.2rem;
  color: ${Colors.GRAY_145};
  margin: 0.5rem 0;
  font-weight: lighter;
`;

const ItemStyled = styled(Flex)`
  height: 100%;
  flex-direction: column;
  justify-content: space-around;
`;
