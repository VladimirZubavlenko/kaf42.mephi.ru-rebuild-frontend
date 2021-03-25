import * as React from 'react';

import styled from 'styled-components';
import { IDispatchProps, IStateProps } from './DiplomaContainer';
import { DiplomaItem } from './DiplomaItem';
import { Flex } from '../common/components/Flex';

export const Diploma: React.FC<IStateProps & IDispatchProps> = ({ items, getList }) => {
  React.useEffect(() => {
    getList();
  }, [getList]);

  return (
    <DiplomaListStyled>
      <DiplomaItem
        isHeader
        item={{
          workName: 'Название работы',
          fullName: 'Студент',
          supervisor: 'Научный руководитель',
          educationType: 'Уровень образования',
          workFile: 'ВКР',
          presentationFile: 'Презентация',
          grade: 'Оценка',
          year: 'Год защиты',
        }}
      />
      {items.map((item) => (
        <DiplomaItem item={item} key={item.id} />
      ))}
    </DiplomaListStyled>
  );
};

const DiplomaListStyled = styled(Flex)`
  width: 100%;
  overflow: auto;
  flex-wrap: wrap;
`;
