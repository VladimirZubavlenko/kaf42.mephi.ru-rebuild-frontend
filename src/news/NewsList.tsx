import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

import { FormattedMessage, useIntl } from 'react-intl';
import { Flex } from '../common/components/Flex';
import { Colors } from '../common/enums/colors';
import { IDispatchProps, IStateProps } from './NewsListContainer';
import { LocaleContext } from '../App';

export const NewsList: React.FC<IStateProps & IDispatchProps> = ({ list, changeActive, getList }) => {
  const locale = useIntl();

  React.useEffect(() => {
    getList(locale.locale);
  }, [getList, locale]);

  return (
    <LocaleContext.Consumer>
      {(value) => (
        <ListStyled>
          {list &&
            list.map((item, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <ItemStyled key={index}>
                <TitleStyled>{item.title}</TitleStyled>
                <DescriptionStyled>{item.description}</DescriptionStyled>
                <DateStyled>{moment(item.createdAt).locale(value.locale).format('ll')}</DateStyled>
                <ButtonStyled onClick={() => changeActive(item.id, value.locale)}>
                  <FormattedMessage id="news.read" />
                </ButtonStyled>
              </ItemStyled>
            ))}
        </ListStyled>
      )}
    </LocaleContext.Consumer>
  );
};

const ListStyled = styled.div`
  flex-direction: column;
`;

const ItemStyled = styled(Flex)`
  border-bottom: 1px solid ${Colors.GRAY_34};
  box-sizing: border-box;
  flex-direction: column;
`;

const TitleStyled = styled.div`
  font-size: 2.2rem;
  padding: 2rem 2rem 0;
`;

const DescriptionStyled = styled.div`
  font-weight: lighter;
  padding: 2rem 2rem 1rem;
  line-height: 1.4;
`;

const DateStyled = styled.div`
  font-size: 1.2rem;
  text-align: right;
  padding: 2rem 2rem;
`;

const ButtonStyled = styled.button`
  border: none;
  height: 4rem;
  background: transparent;
  color: ${Colors.GREEN};
  outline: none;
  border-top: 1px solid ${Colors.GRAY_34};
  transition: all 0.3s ease;
  cursor: pointer;
  :hover {
    background: ${Colors.GRAY_34};
  }
`;
