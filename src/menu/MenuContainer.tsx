import { connect } from 'react-redux';

import { IRootState } from '../reducers';
import { Menu } from './Menu';

export type IStateProps = ReturnType<typeof mapStateToProps>;

const mapStateToProps = (state: IRootState) => ({
  activeUrl: state.router.location.pathname,
});

export const MenuContainer = connect(mapStateToProps)(Menu);
