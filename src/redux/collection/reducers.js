import { SEND_THINGS, SEND_THINGS_ERROR } from "./actions";

const initState = {
  success: null,
  error: null
};

export const thingsReducer = (state = initState, action) => {
  switch (action.type) {
    case SEND_THINGS:
      return {
        ...state,
        success: true
      };

    case SEND_THINGS_ERROR:
      return {
        ...state,
        error: true
      };

    default:
      return state;
  }
};
