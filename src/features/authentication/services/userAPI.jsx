import { FacebookAuthProvider,GoogleAuthProvider } from "firebase/auth";

import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { USER_REDUCERS } from "../../../store/user-slice";
import { auth } from "../../../firebase";

export const signInAPI = ( ) => {
  return (dispatch) => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider).then((res) => {
      dispatch(USER_REDUCERS.setUser(res.user));
    }).catch(err=>alert(err));
  };
};


export const getUserAuth = ()=> {
  return (dispatch) => {
    onAuthStateChanged(auth, async (user) => {
      if (!user) return;
      dispatch(USER_REDUCERS.setUser(user));
    });
  };
}


export function signOutAPI() {
  return (dispatch) => {
    signOut(auth)
      .then(() => {
        dispatch(USER_REDUCERS.signOut());
      })
      .catch((err) => {
        alert(err);
      });
  };
}