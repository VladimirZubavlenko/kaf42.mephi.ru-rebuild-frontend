import * as React from 'react';

import { useIntl } from 'react-intl';
import { EmployeeContainer } from '../employee/EmployeeContainer';
import { LayoutContent } from '../layout/LayoutContent';

const Employee: React.FC = () => {
  const intl = useIntl();
  React.useEffect(() => {
    document.title = 'Сотрудники | Кафедра 42';
  });

  return (
    <LayoutContent title={intl.messages['employee.title'].toLocaleString()}>
      <EmployeeContainer />
    </LayoutContent>
  );
};

export default Employee;
