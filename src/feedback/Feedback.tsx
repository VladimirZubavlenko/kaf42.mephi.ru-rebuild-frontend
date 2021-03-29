import * as React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { Colors } from '../common/enums/colors';

export const Feedback: React.FC = () => (
  <FeedbackStyled>
    <Card>
      <p>
        <strong>
          <FormattedMessage id="contacts.ave.dol" />
        </strong>
      </p>
      <p>
        <FormattedMessage id="contacts.ave" />
      </p>
      <p>
        <FormattedMessage id="contacts.ave.phone" />
      </p>
      <p>
        <FormattedMessage id="contacts.ave.email" />
      </p>
    </Card>
    <Card>
      <p>
        <strong>
          <FormattedMessage id="contacts.kkg.dol" />
        </strong>
      </p>
      <p>
        <FormattedMessage id="contacts.kkg" />
      </p>
      <p>
        <FormattedMessage id="contacts.kkg.phone" />
      </p>
      <p>
        <FormattedMessage id="contacts.kkg.email" />
      </p>
    </Card>
    <Card>
      <p>
        <strong>
          <FormattedMessage id="contacts.zvi.dol" />
        </strong>
      </p>
      <p>
        <FormattedMessage id="contacts.zvi" />
      </p>
      <p>
        <FormattedMessage id="contacts.zvi.phone" />
      </p>
      <p>
        <FormattedMessage id="contacts.zvi.email" />
      </p>
      <br />
    </Card>
  </FeedbackStyled>
);

const FeedbackStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5rem;
  font-size: 2rem;
`;

const Card = styled.div`
  border-bottom: 1px solid ${Colors.GRAY_34};
`;

const LinkStyled = styled.a`
  color: ${Colors.GREEN};
`;
