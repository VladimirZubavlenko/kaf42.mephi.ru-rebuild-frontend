import * as React from 'react';
import { LayoutContent } from '../layout/LayoutContent';

const ResearchTeam: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Research Team | Кафедра 42';
  });

  return (
    <LayoutContent title="Research Team">
      <div>Раздел в разработке</div>
    </LayoutContent>
  );
};

export default ResearchTeam;
