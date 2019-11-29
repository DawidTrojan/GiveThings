import { firebase } from "@firebase/app";
import "@firebase/firestore";

export const START_ADDING_THINGS = "[adding-things] Start adding things";
export const ADDED_THINGS_SUCCESS = "[success] Added things success";
export const ADDED_THINGS_ERROR = "[error] Added things error";

export const sendThings = items => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    const firestore = firebase.firestore();
    const userId = getState().firebaseReducer.auth.uid;
    dispatch({ type: START_ADDING_THINGS });
    firestore
      .collection("things")
      .add({
        ...items,
        authorId: userId
      })
      .then(() => {
        dispatch({ type: ADDED_THINGS_SUCCESS });
      })
      .catch(error => {
        dispatch({ type: ADDED_THINGS_ERROR, ...error });
      });
  };
};
