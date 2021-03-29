import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { NewsList } from './NewsList';
import { Creators } from './duck/actions';
import { IRootState } from '../reducers';

export type IStateProps = ReturnType<typeof mapStateToProps>;

export type IDispatchProps = ReturnType<typeof mapDispatchToProps>;

const mapStateToProps = (state: IRootState) => ({
  status: state.news.status,
  pageNumber: state.news.pageNumber,
  count: state.news.count,
  list: state.news.items,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  changeActive: (id: string) => dispatch(Creators.newsOnRefreshActive(id)),
  getList: (pageNumber: number, lang: string) => dispatch(Creators.newsOnRefreshList(pageNumber, 10, lang)),
});

export const NewsListContainer = connect(mapStateToProps, mapDispatchToProps)(NewsList);
