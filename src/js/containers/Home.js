import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import Home from "../components/+Home";

const mapState = state => {
  return {
    things: state.firestoreReducer.ordered.things,
    auth: state.firebaseReducer.auth
  };
};

export default compose(firestoreConnect(["things"]), connect(mapState))(Home);
