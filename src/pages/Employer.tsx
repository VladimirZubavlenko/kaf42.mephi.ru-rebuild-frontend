import * as React from 'react';

import { LayoutContent } from '../layout/LayoutContent';
import { EmployerContainer } from '../employer/EmployerContainer';

const Employer: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Работодатели | Кафедра 42';
  });

  return (
    <LayoutContent title="Работодатели">
      <EmployerContainer />
    </LayoutContent>
  );
};

export default Employer;
