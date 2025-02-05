import { Button, Box } from "@mui/material";

const Login = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Button variant="contained" color="primary">
        Sign in with Google
      </Button>
    </Box>
  );
};

export default Login;
