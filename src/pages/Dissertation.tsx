import * as React from 'react';

import { DissertationContainer } from '../dissertation/DissertationContainer';
import { LayoutContent } from '../layout/LayoutContent';

const Dissertation: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Диссертации | Кафедра 42';
  });

  return (
    <LayoutContent title="Наши диссертации">
      <DissertationContainer />
    </LayoutContent>
  );
};

export default Dissertation;
