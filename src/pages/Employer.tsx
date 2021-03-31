import * as React from 'react';

import { useIntl } from 'react-intl';
import { LayoutContent } from '../layout/LayoutContent';
import { EmployerContainer } from '../employer/EmployerContainer';

const Employer: React.FC = () => {
  const locale = useIntl();

  React.useEffect(() => {
    document.title = 'Работодатели | Кафедра 42';
  });

  return (
    <LayoutContent title={locale.messages['employers.title'].toLocaleString()}>
      <EmployerContainer />
    </LayoutContent>
  );
};

export default Employer;
