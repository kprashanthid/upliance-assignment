import { Button, Box, Typography, Paper } from "@mui/material";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useDispatch } from "react-redux";
import { auth } from "../firebaseConfig";
import { login } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      dispatch(
        login({
          uid: user.uid,
          displayName: user.displayName || "Anonymous",
          email: user.email || "Anonymous",
          photoURL: user.photoURL || "Anonymous",
        })
      );

      navigate("/");
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#f5f5f5"
    >
      <Paper sx={{ p: 4, borderRadius: 3, textAlign: "center", boxShadow: 4 }}>
        <Typography variant="h4" gutterBottom>
          Welcome to Dashboard
        </Typography>
        <Typography variant="body1" mb={3}>
          Sign in with Google to continue
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleGoogleSignIn}
        >
          Sign in with Google
        </Button>
      </Paper>
    </Box>
  );
};

export default LoginPage;
