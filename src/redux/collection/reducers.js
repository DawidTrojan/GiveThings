import { SEND_THINGS, SEND_THINGS_ERROR } from "./actions";

const initState = {};

export const thingsReducer = (state = initState, action) => {
  switch (action.type) {
    case SEND_THINGS:
      return state;

    case SEND_THINGS_ERROR:
      return state;

    default:
      return state;
  }
};
