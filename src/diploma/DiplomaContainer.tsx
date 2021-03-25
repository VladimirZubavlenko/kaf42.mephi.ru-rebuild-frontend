import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { IRootState } from '../reducers';
import { Diploma } from './Diploma';
import { Creators } from './duck/actions';

export type IStateProps = ReturnType<typeof mapStateToProps>;

export type IDispatchProps = ReturnType<typeof mapDispatchToProps>;

const mapStateToProps = (state: IRootState) => ({
  items: state.diploma.items,
  status: state.diploma.status,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getList: () => dispatch(Creators.diplomaGetList()),
});

export const DiplomaContainer = connect(mapStateToProps, mapDispatchToProps)(Diploma);
