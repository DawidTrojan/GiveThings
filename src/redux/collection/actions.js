import { firebase } from "@firebase/app";
import "@firebase/firestore";

export const sendThings = items => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    const firestore = firebase.firestore();
    const userId = getState().firebaseReducer.auth.uid;
    firestore.collection("things").add({
      ...items,
      authorId: userId
    });
  };
};
