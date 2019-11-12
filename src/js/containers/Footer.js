import { connect } from "react-redux";
import Footer from "../components/+Home/+HomeFooter/Footer";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

const mapState = state => {
  console.log(state);
  return {
    things: state.firebaseReducer.ordered.things
  };
};

export default compose(
  connect(mapState),
  firestoreConnect([{ collection: "things" }])
)(Footer);
