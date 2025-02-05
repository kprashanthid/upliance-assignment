import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Box, Typography } from "@mui/material";

const UserDataDisplay = () => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <Box
      p={3}
      height={380}
      bgcolor="white"
      borderRadius={2}
      boxShadow={2}
      maxWidth={400}
      mx="auto"
    >
      <Typography variant="h6" color="gray" gutterBottom>
        Saved User Data
      </Typography>
      <Typography variant="body1" color="textSecondary">
        <strong>ID:</strong> {user.id}
      </Typography>
      <Typography variant="body1" color="textSecondary">
        <strong>Name:</strong> {user.name}
      </Typography>
      <Typography variant="body1" color="textSecondary">
        <strong>Email:</strong> {user.email}
      </Typography>
      <Typography variant="body1" color="textSecondary">
        <strong>Phone:</strong> {user.phone}
      </Typography>
      <Typography variant="body1" color="textSecondary">
        <strong>Address:</strong> {user.address}
      </Typography>
    </Box>
  );
};

export default UserDataDisplay;
