import * as React from 'react';
import styled from 'styled-components';

import { LayoutContent } from '../layout/LayoutContent';
import { Flex } from '../common/components/Flex';
import { Fonts } from '../common/enums/fonts';
import { Breakpoints } from '../common/enums/breakpoints';

const Root: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Главная | Кафедра 42';
  });

  return (
    <LayoutContent title="Главная страница">
      <RootContent>
        <WrapperStyled>
          <RootText>
            <p>
              Приветствуем Вас на официальном сайте кафедры №42 «Криптология и кибербезопасность» Национального
              исследовательского ядерного университета «МИФИ»!
            </p>
            <p>
              Наши сотрудники — эксперты в области компьютерной безопасности, представляющие кафедру на всероссийских и
              международных научных конференциях. Часть преподавателей – работники государственных и передовых
              коммерческих компаний, специализирующихся на защите информации.
            </p>
            <p>
              Наши студенты, аспиранты и выпускники побеждают не только на всероссийских олимпиадах и конкурсах, но и на
              международных CTF-соревнованиях и конкурсах от ведущих мировых компаний в области кибербезопасности.
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
  position: absolute;
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
