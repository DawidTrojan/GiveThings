import { connect } from "react-redux";
import GiveThings from "../components/+GiveThings";

const mapState = state => {
  return {
    auth: state.firebaseReducer.auth
  };
};

export default connect(mapState, null)(GiveThings);
