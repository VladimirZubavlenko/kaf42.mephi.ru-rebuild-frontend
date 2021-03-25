import * as React from 'react';
import { LayoutContent } from '../layout/LayoutContent';
import { Feedback as FeedbackComponent } from '../feedback/Feedback';

const Feedback: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Обратная связь | Кафедра 42';
  });

  return (
    <LayoutContent title="Обратная связь">
      <FeedbackComponent />
    </LayoutContent>
  );
};

export default Feedback;
