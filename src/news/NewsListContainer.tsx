import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { NewsList } from './NewsList';
import { Creators } from './duck/actions';
import { IRootState } from '../reducers';

export type IStateProps = ReturnType<typeof mapStateToProps>;

export type IDispatchProps = ReturnType<typeof mapDispatchToProps>;

const mapStateToProps = (state: IRootState) => ({
  status: state.news.status,
  list: state.news.items,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  changeActive: (id: string, lang: string) => dispatch(Creators.newsOnRefreshActive(id, lang)),
  getList: (lang: string) => dispatch(Creators.newsOnRefreshList(lang)),
});

export const NewsListContainer = connect(mapStateToProps, mapDispatchToProps)(NewsList);
