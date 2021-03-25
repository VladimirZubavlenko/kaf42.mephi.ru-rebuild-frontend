import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { IRootState } from '../reducers';
import { Employer } from './Employer';
import { Creators } from './duck/actions';

const mapStateToProps = (state: IRootState) => ({
  employer: state.employer.items,
  status: state.employer.status,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getList: () => dispatch(Creators.employerGetList()),
});

export const EmployerContainer = connect(mapStateToProps, mapDispatchToProps)(Employer);
