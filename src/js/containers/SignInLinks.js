import { connect } from "react-redux";
import SignInLinks from "../components/+Home/+HomeHeader/Nav/SignInLinks";
import { signOut } from "../../redux/auth/actions";

const mapDispatch = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(
  null,
  mapDispatch
)(SignInLinks);
