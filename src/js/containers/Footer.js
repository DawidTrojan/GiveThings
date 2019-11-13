import { connect } from "react-redux";
import Footer from "../components/+Home/+HomeFooter/Footer";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

const mapState = state => {
  return {
    things: state.firestoreReducer.ordered.things,
    auth: state.firebaseReducer.auth
  };
};

export default compose(firestoreConnect(["things"]), connect(mapState))(Footer);
