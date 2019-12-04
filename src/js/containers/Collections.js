import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import Collections from "../components/+Authorization/Collections";

const mapState = state => {
  return {
    things: state.firestoreReducer.ordered.things,
    auth: state.firebaseReducer.auth
  };
};

export default compose(
  firestoreConnect(["things"]),
  connect(mapState)
)(Collections);
