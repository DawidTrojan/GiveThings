import { connect } from "react-redux";
import { sendThings } from "../../redux/collection/actions";
import Form from "../components/+GiveThings/FormSteps";

const mapState = state => {
  return {
    things: state.firestoreReducer.requesting
  };
};

const mapDispatch = dispatch => {
  return {
    giveThings: items => dispatch(sendThings(items))
  };
};

export default connect(mapState, mapDispatch)(Form);
