import { Button } from "@mui/material";
import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";

const Logout = () => {
  const dispatch = useDispatch();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      dispatch(logout());
    } catch (error) {
      console.error("Sign-Out Error:", error);
    }
  };

  return (
    <Button variant="contained" color="secondary" onClick={handleSignOut}>
      Sign Out
    </Button>
  );
};

export default Logout;
