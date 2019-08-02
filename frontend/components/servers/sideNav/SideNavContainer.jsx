import { connect } from 'react-redux';
import SideNav from './SideNav';
import { fetchAllServer } from '../../../actions/serverActions';
// import { currentUserServersSelector } from '../../../reducers/serverReducers/serverReducers';

const mapStateToProps = (state) => {
  return {
    // servers: currentUserServersSelector(state),
  };
};

export default connect(mapStateToProps)(SideNav);
