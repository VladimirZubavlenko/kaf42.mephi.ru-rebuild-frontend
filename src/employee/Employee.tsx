import * as React from 'react';
import styled from 'styled-components';

import { Flex } from '../common/components/Flex';
import { EmployeeItem } from './EmployeeItem';
import { Colors } from '../common/enums/colors';
import { IDispatchProps, IStateProps } from './EmployeeContainer';
import { Breakpoints } from '../common/enums/breakpoints';

export const Employee: React.FC<IStateProps & IDispatchProps> = ({ employeeMain, employeeList, getList }) => {
  React.useEffect(() => {
    getList();
  }, [getList]);

  return (
    <EmployeeStyled>
      {employeeMain.map((employeesItem) => (
        <EmployeeItemWrapper key={employeesItem.id}>
          <EmployeeItem item={employeesItem} />
        </EmployeeItemWrapper>
      ))}
      <div />
      {employeeList.map((employeesItem) => (
        <EmployeeItemWrapper key={employeesItem.id}>
          <EmployeeItem item={employeesItem} />
        </EmployeeItemWrapper>
      ))}
    </EmployeeStyled>
  );
};

const EmployeeStyled = styled(Flex)`
  flex-wrap: wrap;
`;

const EmployeeItemWrapper = styled.div`
  width: 33.3333%;
  @media screen and (max-width: ${Breakpoints.TABLET}px) {
    width: 50%;
  }
  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    width: 100%;
  }
  box-sizing: border-box;
  padding: 2.5rem 5rem;
  border-right: 1px solid ${Colors.GRAY_34};
  border-bottom: 1px solid ${Colors.GRAY_34};
`;
