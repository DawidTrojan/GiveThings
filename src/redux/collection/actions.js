export const SEND_THINGS = "[sendThings-success] SendThings success";
export const SEND_THINGS_ERROR = "[sendThings-error] SendThings error";

export const sendThings = items => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    const firestore = getFirestore();
    const userId = getState().firebaseReducer.auth.uid;

    firestore
      .collection("things")
      .add({
        ...items,
        authorId: userId
      })
      .then(() => {
        dispatch({ type: "SEND_THINGS", items });
      })
      .catch(error => {
        dispatch({ type: "SEND_THINGS_ERROR", error });
      });
  };
};
