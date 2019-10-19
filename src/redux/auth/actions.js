export const SIGNED_IN = "[signin-success] Signin success";
export const SIGN_IN_ERROR = "[sign-error] Signin rrror";

export const SIGNED_UP = "[signup] Signup success";
export const SIGN_UP_ERROR = "[signup-error] Signup error";

export const SIGN_OUT = "[signout] Signout success";

export const signIn = (email, password) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        dispatch({ type: SIGNED_IN });
      })
      .catch(error => {
        dispatch({ type: SIGN_IN_ERROR, error });
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: SIGN_OUT });
      });
  };
};

export const signUp = newUser => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

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
        dispatch({ type: SIGN_UP_ERROR, error });
      });
  };
};
