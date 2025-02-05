// src/pages/MainPage.tsx
import { Box, Typography, Divider, Grid, Paper } from "@mui/material";
import Counter from "./components/Counter";
import Dashboard from "./components/Dashboard";
import Logout from "./components/Logout";
import RichTextEditor from "./components/RichTextEditor";
import UserForm from "./components/UserForm";
import UserDataDisplay from "./components/UserDataDisplay";

const MainPage = () => {
  return (
    <Box p={4}>
      <Divider sx={{ my: 2 }} />
      <Grid container spacing={4} mb={4}>
        <Grid item xs={12} sm={6}>
          <Paper sx={{ p: 2 }}>
            <Counter />
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Paper sx={{ p: 2 }}>
            <RichTextEditor />
          </Paper>
        </Grid>
      </Grid>

      <Divider sx={{ my: 2 }} />

      <Grid container spacing={4} mb={4}>
        <Grid item xs={12} sm={6}>
          <Paper sx={{ p: 2 }}>
            <UserForm />
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Paper sx={{ p: 2 }}>
            <UserDataDisplay />
          </Paper>
        </Grid>
      </Grid>

      <Divider sx={{ my: 2 }} />
      <Dashboard />
      <Logout />
    </Box>
  );
};

export default MainPage;
