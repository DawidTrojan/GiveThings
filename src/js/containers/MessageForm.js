import { connect } from "react-redux";
import Form from "../components/+Home/+HomeFooter/Form";
import { contactUs } from "../../redux/messages/actions";

const mapState = state => {
  return {
    messages: state.messages
  };
};

const mapDispatch = dispatch => {
  return {
    contact: message => dispatch(contactUs(message))
  };
};

export default connect(mapState, mapDispatch)(Form);
