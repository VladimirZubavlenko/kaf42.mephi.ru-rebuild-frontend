import * as React from 'react';

import styled from 'styled-components';
import { IDispatchProps, IStateProps } from './DissertationContainer';
import { DissertationItem } from './DissertationItem';
import { Flex } from '../common/components/Flex';

export const Dissertation: React.FC<IStateProps & IDispatchProps> = ({ items, getList }) => {
  React.useEffect(() => {
    getList();
  }, [getList]);

  return (
    <DissertationListStyled>
      <DissertationItem
        isHeader
        item={{
          fullName: 'ФИО соискателя',
          academicDegree: 'Степень',
          defendPlace: 'Место защиты',
          defendDate: 'Год',
          theme: 'Тема',
          supervisor: 'Научный руководитель',
          autoRefFile: 'Автореферат',
          dissertationFile: 'Диссертация',
        }}
      />
      {items.map((item) => (
        <DissertationItem item={item} key={item.id} />
      ))}
    </DissertationListStyled>
  );
};

const DissertationListStyled = styled(Flex)`
  width: 100%;
  overflow: auto;
  flex-wrap: wrap;
`;