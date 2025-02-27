import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Box, Typography, Paper } from "@mui/material";

const UserDataDisplay = () => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        borderRadius: 3,
        boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
        maxWidth: 420,
        mx: "auto",
        background: "linear-gradient(135deg, #f8fafc, #e2e8f0)",
      }}
    >
      <Typography variant="h5" color="primary" gutterBottom textAlign="center">
        Saved User Data
      </Typography>

      <Box display="flex" flexDirection="column" gap={1.5} mt={2}>
        <Typography variant="body1">
          <strong>ID:</strong> {user.id}
        </Typography>
        <Typography variant="body1">
          <strong>Name:</strong> {user.name}
        </Typography>
        <Typography variant="body1">
          <strong>Email:</strong> {user.email}
        </Typography>
        <Typography variant="body1">
          <strong>Phone:</strong> {user.phone}
        </Typography>
        <Typography variant="body1">
          <strong>Address:</strong> {user.address}
        </Typography>
      </Box>
    </Paper>
  );
};

export default UserDataDisplay;
