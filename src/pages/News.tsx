import * as React from 'react';

import { News as NewsComponent } from '../news/News';
import { LayoutContent } from '../layout/LayoutContent';
import { IStateProps } from './NewsContainer';

export const News: React.FC<IStateProps> = ({ title }) => {
  React.useEffect(() => {
    document.title = 'Новости | Кафедра 42';
  });

  return (
    <LayoutContent title={title}>
      <NewsComponent />
    </LayoutContent>
  );
};
