import "@firebase/firestore";

export const START_SIGNING_IN = "[start-signin] Start Signin";
export const SIGNED_IN = "[signin-success] Signin success";
export const SIGN_IN_ERROR = "[signin-error] Signin error";

export const START_SIGNING_UP = "[start-signup] Start Signup";
export const SIGNED_UP = "[signup-success] Signup success";
export const SIGN_UP_ERROR = "[signup-error] Signup error";

export const signIn = (email, password) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    dispatch({ type: START_SIGNING_IN });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        dispatch({ type: SIGNED_IN });
      })
      .catch(error => {
        dispatch({ type: SIGN_IN_ERROR, ...error });
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase.auth().signOut();
  };
};

export const signUp = newUser => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = firebase.firestore();
    dispatch({ type: START_SIGNING_UP });
    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then(response => {
        return firestore
          .collection("users")
          .doc(response.user.uid)
          .set({
            email: newUser.email
          });
      })
      .then(() => {
        dispatch({ type: SIGNED_UP });
      })
      .catch(error => {
        dispatch({ type: SIGN_UP_ERROR, ...error });
      });
  };
};
