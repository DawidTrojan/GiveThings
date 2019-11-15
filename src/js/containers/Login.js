import { connect } from "react-redux";
import Login from "../components/+Login";
import { signIn } from "../../redux/auth/actions";

const mapState = state => {
  return {
    auth: state.firebaseReducer.auth
  };
};

const mapDispatch = dispatch => {
  return {
    signIn: (email, password) => dispatch(signIn(email, password))
  };
};

export default connect(mapState, mapDispatch)(Login);
