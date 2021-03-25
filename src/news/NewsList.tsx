import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import InfiniteScroll from 'react-infinite-scroll-component';

import { FetchingStatuses } from '../common/enums/fetchingStatuses';
import { Flex } from '../common/components/Flex';
import { Colors } from '../common/enums/colors';
import { IDispatchProps, IStateProps } from './NewsListContainer';

export interface IProps {
  scrollableId: string;
}

const hasMoreNews = (pageNumber: number, count: number) => pageNumber !== Math.ceil(count / 10);

export const NewsList: React.FC<IProps & IStateProps & IDispatchProps> = ({
  list,
  changeActive,
  getList,
  pageNumber,
  count,
  status,
  scrollableId,
}) => {
  React.useEffect(() => {
    if (status === FetchingStatuses.NONE) {
      getList(1);
    }
  }, [getList, status]);

  return (
    <ListStyled
      dataLength={list.length}
      next={() => getList(pageNumber + 1)}
      hasMore={hasMoreNews(pageNumber, count)}
      loader={<div>Загрузка...</div>}
      scrollableTarget={scrollableId}>
      {list.map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <ItemStyled key={index}>
          <TitleStyled>{item.title}</TitleStyled>
          <DescriptionStyled>{item.description}</DescriptionStyled>
          <DateStyled>{moment(item.createdAt).locale('ru').format('ll')}</DateStyled>
          <ButtonStyled onClick={() => changeActive(item.id)}>Читать</ButtonStyled>
        </ItemStyled>
      ))}
    </ListStyled>
  );
};

const ListStyled = styled(InfiniteScroll)`
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
