import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { IRootState } from '../reducers';
import { Employee } from './Employee';
import { Creators } from './duck/actions';

export type IStateProps = ReturnType<typeof mapStateToProps>;

export type IDispatchProps = ReturnType<typeof mapDispatchToProps>;

const mapStateToProps = (state: IRootState) => ({
  employeeMain: state.employee.items.main,
  employeeList: state.employee.items.list,
  status: state.employee.status,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getList: () => dispatch(Creators.employeeGetList()),
});

export const EmployeeContainer = connect(mapStateToProps, mapDispatchToProps)(Employee);
