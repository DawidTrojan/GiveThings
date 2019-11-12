import { connect } from "react-redux";
import { sendThings } from "../../redux/collection/actions";
import Form from "../components/+GiveThings/FormSteps";

const mapDispatch = dispatch => {
  return {
    giveThings: items => dispatch(sendThings(items))
  };
};

export default connect(
  null,
  mapDispatch
)(Form);
