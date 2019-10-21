import { connect } from "react-redux";
import HomeHeader from "../components/+Home/+HomeHeader";

const mapState = state => {
  return {
    authError: state.authReducer.authError,
    authSuccess: state.authReducer.authSuccess,
    auth: state.firebaseReducer.auth
  };
};

export default connect(
  mapState,
  null
)(HomeHeader);
