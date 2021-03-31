import * as React from 'react';

import { useIntl } from 'react-intl';
import { DissertationContainer } from '../dissertation/DissertationContainer';
import { LayoutContent } from '../layout/LayoutContent';

const Dissertation: React.FC = () => {
  const locale = useIntl();

  React.useEffect(() => {
    document.title = 'Диссертации | Кафедра 42';
  });

  return (
    <LayoutContent title={locale.messages['dissertation.title'].toLocaleString()}>
      <DissertationContainer />
    </LayoutContent>
  );
};

export default Dissertation;
