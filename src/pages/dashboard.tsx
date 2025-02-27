import { Box, Divider, Grid, Paper } from "@mui/material";
import { useSelector } from "react-redux";
import Counter from "../components/Counter";
import RichTextEditor from "../components/RichTextEditor";
import UserForm from "../components/UserForm";
import FluidRows from "../components/FluidRows";
import Logout from "../components/Logout";
import UserDataDisplay from "../components/UserDataDisplay";
import { Navigate } from "react-router-dom";
import { RootState } from "../redux/store";

const MainPage = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return (
    <Box p={4} bgcolor="#f5f5f5" minHeight="100vh">
      <Divider sx={{ my: 3 }} />
      <Grid container spacing={4} mb={4}>
        <Grid item xs={12} sm={6}>
          <Paper sx={{ p: 3, borderRadius: "12px", boxShadow: 4 }}>
            <Counter />
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Paper sx={{ p: 3, borderRadius: "12px", boxShadow: 4 }}>
            <RichTextEditor />
          </Paper>
        </Grid>
      </Grid>

      <Divider sx={{ my: 3 }} />

      <Grid container spacing={4} mb={4}>
        <Grid item xs={12} sm={6}>
          <Paper sx={{ p: 3, borderRadius: "12px", boxShadow: 4 }}>
            <UserForm />
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Paper sx={{ p: 3, borderRadius: "12px", boxShadow: 4 }}>
            <UserDataDisplay />
          </Paper>
        </Grid>
      </Grid>

      <Divider sx={{ my: 3 }} />
      <FluidRows />
      <Logout />
    </Box>
  );
};

export default MainPage;
