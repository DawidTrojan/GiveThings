import { connect } from "react-redux";
import HomeSteps from "../components/+Home/+HomeSteps";

const mapState = state => {
  return {
    auth: state.firebaseReducer.auth
  };
};

export default connect(mapState, null)(HomeSteps);
