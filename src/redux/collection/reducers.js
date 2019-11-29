import {
  START_ADDING_THINGS,
  ADDED_THINGS_SUCCESS,
  ADDED_THINGS_ERROR
} from "./actions";

const initState = {
  isLoading: false,
  thingsError: "",
  thingsSuccess: ""
};

export const thingsReducer = (state = initState, action) => {
  switch (action.type) {
    case START_ADDING_THINGS:
      return {
        ...state,
        isLoading: true
      };

    case ADDED_THINGS_SUCCESS:
      return {
        ...state,
        thingsSuccess: "Formularz wysłany poprawnie!",
        isLoading: false,
        thingsError: ""
      };

    case ADDED_THINGS_ERROR:
      return {
        ...state,
        thingsError: action.code,
        thingsSuccess: "",
        isLoading: false
      };

    default:
      return state;
  }
};
