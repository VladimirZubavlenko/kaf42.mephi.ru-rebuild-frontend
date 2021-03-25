import { connect } from 'react-redux';

import { IRootState } from '../reducers';
import { News } from './News';

export type IStateProps = ReturnType<typeof mapStateToProps>;

const mapStateToProps = (state: IRootState) => ({
  title: state.news.activeItem ? state.news.activeItem.title : 'Загрузка',
});

const NewsContainer = connect(mapStateToProps)(News);

export default NewsContainer;
