import React from 'react';
import styled from 'styled-components';

import { FormattedMessage, useIntl } from 'react-intl';
import { IEmployee } from './interfaces/IEmployee';
import { EmployeeItemListItem } from './EmployeeItemListItem';
import { EmployeeItemListItemSubject } from './EmployeeItemListItemSubject';
import { Flex } from '../common/components/Flex';
import { EmployeeTypeEnum } from './enums/EmployeeTypeEnum';
import { Colors } from '../common/enums/colors';

export interface IProps {
  item: IEmployee;
}

export const EmployeeItem: React.FC<IProps> = ({ item }) => {
  const locale = useIntl();

  return (
    <ItemStyled>
      <TitleStyled>
        {item.fullName}
        {item.type !== EmployeeTypeEnum.NONE && (
          <SubTitleStyled>
            {item.type === EmployeeTypeEnum.GENERAL && <FormattedMessage id="employee.head" />}
            {item.type === EmployeeTypeEnum.SUBGENERAL && <FormattedMessage id="employee.deputy" />}
            {item.type === EmployeeTypeEnum.SECRETARY && <FormattedMessage id="employee.secretary" />}
          </SubTitleStyled>
        )}
      </TitleStyled>
      <div>
        <EmployeeItemListItem title={locale.messages['employee.degree'].toLocaleString()}>
          {item.rank}
        </EmployeeItemListItem>
        <EmployeeItemListItem title={locale.messages['employee.post'].toLocaleString()}>
          {item.position}
        </EmployeeItemListItem>
        <EmployeeItemListItem title={locale.messages['employee.employment'].toLocaleString()}>
          {item.job}
        </EmployeeItemListItem>
        {item.subjects[0] !== '' && (
          <EmployeeItemListItemSubject title={locale.messages['employee.courses'].toLocaleString()}>
            {item.subjects.join(', ')}
          </EmployeeItemListItemSubject>
        )}
      </div>
    </ItemStyled>
  );
};

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
