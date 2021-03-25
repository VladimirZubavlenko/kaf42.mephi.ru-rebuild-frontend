import * as React from 'react';

import { EmployeeContainer } from '../employee/EmployeeContainer';
import { LayoutContent } from '../layout/LayoutContent';

const Employee: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Сотрудники | Кафедра 42';
  });

  return (
    <LayoutContent title="Сотрудники кафедры">
      <EmployeeContainer />
    </LayoutContent>
  );
};

export default Employee;
