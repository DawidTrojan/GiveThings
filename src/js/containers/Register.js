import { connect } from "react-redux";
import Register from "../components/+Authorization/Register";
import { signUp } from "../../redux/auth/actions";

const mapState = state => {
  return {
    auth: state.firebaseReducer.auth
  };
};

const mapDispatch = dispatch => {
  return {
    signUp: newUser => dispatch(signUp(newUser))
  };
};

export default connect(mapState, mapDispatch)(Register);
