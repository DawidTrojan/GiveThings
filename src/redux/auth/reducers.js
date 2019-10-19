import {
  SIGNED_IN,
  SIGN_IN_ERROR,
  SIGN_OUT,
  SIGNED_UP,
  SIGN_UP_ERROR
} from "./actions";

const initState = {
  authError: null,
  authSuccess: null,
  authLoading: null
};

export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case SIGNED_IN:
      return {
        ...state,
        authError: null,
        authSuccess: "Login Success",
        authLoading: false
      };

    case SIGN_IN_ERROR:
      console.log("login failed");
      return {
        ...state,
        authError: "Login Failed"
      };

    case SIGN_OUT:
      return state;

    case SIGNED_UP:
      return {
        ...state,
        authError: null
      };

    case SIGN_UP_ERROR:
      return {
        ...state,
        authError: action.error.message
      };

    default:
      return state;
  }
};
