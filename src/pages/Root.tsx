import * as React from 'react';
import styled from 'styled-components';

import { FormattedMessage, useIntl } from 'react-intl';
import { LayoutContent } from '../layout/LayoutContent';
import { Flex } from '../common/components/Flex';
import { Fonts } from '../common/enums/fonts';
import { Breakpoints } from '../common/enums/breakpoints';

const Root: React.FC = () => {
  const intl = useIntl();

  React.useEffect(() => {
    document.title = 'Главная | Кафедра 42';
  });

  return (
    <LayoutContent title={intl.messages['home.title'].toLocaleString()}>
      <RootContent>
        <WrapperStyled>
          <RootText>
            <p>
              <FormattedMessage id="home.p1" />
            </p>
            <p>
              <FormattedMessage id="home.p2" />
            </p>
            <p>
              <FormattedMessage id="home.p3" />
            </p>
          </RootText>
        </WrapperStyled>
      </RootContent>
    </LayoutContent>
  );
};

const RootContent = styled(Flex)`
  flex-direction: column;
  position: relative;
`;

const RootText = styled.div`
  line-height: 1.6;
  font-size: 2.2rem;
  padding: 5rem 30% 5rem 8rem;
  font-family: ${Fonts.PIXEL}, sans-serif;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  @media screen and (max-width: ${Breakpoints.MOBILE}px) {
    position: relative;
    font-size: 1.2rem;
  } ;
`;

const WrapperStyled = styled(Flex)`
  justify-content: center;
  width: 100%;
  box-shadow: inset 1rem 1rem 40px 40px #000000;
`;

export default Root;
