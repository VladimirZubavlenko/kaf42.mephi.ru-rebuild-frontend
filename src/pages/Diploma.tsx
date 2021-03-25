import * as React from 'react';

import { LayoutContent } from '../layout/LayoutContent';
import { DiplomaContainer } from '../diploma/DiplomaContainer';

const Diploma: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Примеры дипломов | Кафедра 42';
  });

  return (
    <LayoutContent title="Примеры дипломов">
      <DiplomaContainer />
    </LayoutContent>
  );
};

export default Diploma;
