import * as React from 'react';
import styled from 'styled-components';
import { Colors } from '../common/enums/colors';

export const Feedback: React.FC = () => (
  <FeedbackStyled>
    <Card>
      <p>
        <strong>И.о. заведующего кафедрой:</strong>
      </p>
      <p>Епишкина Анна Васильевна</p>
      <p>
        Телефон <LinkStyled href="tel:+74957885699p9842">+7 (495) 788 56 99</LinkStyled>, доб. 9842
      </p>
      <p>
        Почта <LinkStyled href="mailto:AVEpishina@mephi.ru">AVEpishina@mephi.ru</LinkStyled>
      </p>
    </Card>
    <Card>
      <p>
        <strong>Заместитель заведующего кафедрой:</strong>
      </p>
      <p>Когос Константин Григорьевич</p>
      <p>
        Телефон <LinkStyled href="tel:+74957885699p9688">+7 (495) 788 56 99</LinkStyled>, доб. 9688
      </p>
      <p>
        Почта <LinkStyled href="mailto:KGKogos@mephi.ru">KGKogos@mephi.ru</LinkStyled>
      </p>
    </Card>
    <Card>
      <p>
        <strong>По вопросам поступления:</strong>
      </p>
      <p>Зубавленко Владимир Иванович</p>
      <p>
        Телефон <LinkStyled href="tel:+74957885699p9642">+7 (495) 788 56 99</LinkStyled>, доб. 9642
      </p>
      <p>
        Почта <LinkStyled href="mailto:VIZubavlenko@mephi.ru">VIZubavlenko@mephi.ru</LinkStyled>
      </p>
      <br />
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
