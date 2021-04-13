import * as React from 'react';
import { useIntl } from 'react-intl';
import { LayoutContent } from '../layout/LayoutContent';
import { Feedback as FeedbackComponent } from '../feedback/Feedback';

const Feedback: React.FC = () => {
  const locale = useIntl();

  React.useEffect(() => {
    document.title = 'Обратная связь | Кафедра 42';
  });

  return (
    <LayoutContent title={locale.messages['contacts.title'].toLocaleString()}>
      <FeedbackComponent />
    </LayoutContent>
  );
};

export default Feedback;
