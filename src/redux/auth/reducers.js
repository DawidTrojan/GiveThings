import {
  START_SIGNING_IN,
  SIGNED_IN,
  SIGN_IN_ERROR,
  START_SIGNING_UP,
  SIGNED_UP,
  SIGN_UP_ERROR
} from "./actions";

const initState = {
  isLoading: false,
  authErrorRegister: "",
  authErrorLogin: "",
  authSuccess: ""
};

export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case START_SIGNING_IN:
      return {
        ...state,
        isLoading: true,
        authErrorRegister: "",
        authErrorLogin: ""
      };

    case SIGNED_IN:
      return {
        ...state,
        authSuccess: "Signin Success",
        isLoading: false,
        authErrorRegister: "",
        authErrorLogin: ""
      };

    case SIGN_IN_ERROR:
      return {
        ...state,
        authErrorLogin: action.code,
        authErrorRegister: "",
        isLoading: false
      };

    case START_SIGNING_UP:
      return {
        ...state,
        isLoading: true,
        authErrorRegister: "",
        authErrorLogin: ""
      };

    case SIGNED_UP:
      return {
        ...state,
        authSuccess: "Signup Success",
        isLoading: false,
        authErrorRegister: "",
        authErrorLogin: ""
      };

    case SIGN_UP_ERROR:
      return {
        ...state,
        authErrorRegister: action.code,
        authErrorLogin: "",
        isLoading: false
      };

    default:
      return state;
  }
};
