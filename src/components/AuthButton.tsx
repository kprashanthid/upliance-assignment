import { Button } from "@mui/material";
import { auth, provider } from "../firebaseConfig";
import { signInWithPopup, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../redux/authSlice";
import { RootState } from "../redux/store";

const AuthButton = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);

  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      dispatch(
        login({
          uid: user.uid,
          displayName: user.displayName!,
          email: user.email!,
          photoURL: user.photoURL!,
        })
      );
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      dispatch(logout());
    } catch (error) {
      console.error("Sign-Out Error:", error);
    }
  };

  return (
    <Button
      variant="contained"
      color={user ? "secondary" : "primary"}
      onClick={user ? handleSignOut : handleSignIn}
    >
      {user ? "Sign Out" : "Sign In with Google"}
    </Button>
  );
};

export default AuthButton;
