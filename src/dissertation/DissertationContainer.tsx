import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { IRootState } from '../reducers';
import { Dissertation } from './Dissertation';
import { Creators } from './duck/actions';

export type IStateProps = ReturnType<typeof mapStateToProps>;

export type IDispatchProps = ReturnType<typeof mapDispatchToProps>;

const mapStateToProps = (state: IRootState) => ({
  items: state.dissertation.items,
  status: state.dissertation.status,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getList: () => dispatch(Creators.dissertationGetList()),
});

export const DissertationContainer = connect(mapStateToProps, mapDispatchToProps)(Dissertation);
