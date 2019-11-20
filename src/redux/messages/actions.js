import { firebase } from "@firebase/app";
import "@firebase/firestore";

export const contactUs = messages => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    const firestore = firebase.firestore();
    firestore.collection("messages").add({
      ...messages
    });
  };
};
