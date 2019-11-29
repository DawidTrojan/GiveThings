import { connect } from "react-redux";
import SignIn from "../components/+Authorization/SignIn";
import { signIn } from "../../redux/auth/actions";

const mapState = state => {
  return {
    auth: state.firebaseReducer.auth,
    error: state.authReducer.authErrorLogin,
    isLoading: state.authReducer.isLoading
  };
};

const mapDispatch = dispatch => {
  return {
    signIn: (email, password) => dispatch(signIn(email, password))
  };
};

export default connect(mapState, mapDispatch)(SignIn);
