import { connect } from 'react-redux';

import { Dispatch } from 'redux';
import { IRootState } from '../reducers';
import { NewsItem } from './NewsItem';
import { Creators } from './duck/actions';

export type IStateProps = ReturnType<typeof mapStateToProps>;

export type IDispatchProps = ReturnType<typeof mapDispatchToProps>;

const mapStateToProps = (state: IRootState) => ({
  item: state.news.activeItem,
  status: state.news.activeStatus,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getActive: () => dispatch(Creators.newsOnRefreshActive()),
});

export const NewsItemContainer = connect(mapStateToProps, mapDispatchToProps)(NewsItem);
