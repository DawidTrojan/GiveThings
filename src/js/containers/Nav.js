import { connect } from "react-redux";
import Nav from "../components/+Home/+HomeHeader/Nav";

const mapState = state => {
  return {
    auth: state.firebaseReducer.auth,
    profile: state.firebaseReducer.profile
  };
};

export default connect(
  mapState,
  null
)(Nav);
