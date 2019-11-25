import { connect } from "react-redux";
import Nav from "../components/+GiveThings/Nav";

const mapState = state => {
  return {
    profile: state.firebaseReducer.profile
  };
};

export default connect(mapState, null)(Nav);
