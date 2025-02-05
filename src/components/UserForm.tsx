import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { updateUser, saveUser, loadUser } from "../redux/userSlice";
import { Box, Button, TextField, Typography } from "@mui/material";

const UserForm = () => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());

    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (user.unsavedChanges) {
        e.preventDefault();
        e.returnValue = "You have unsaved changes!";
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [user.unsavedChanges, dispatch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateUser({ [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(saveUser());
    alert("User data saved!");
  };

  return (
    <Box
      p={3}
      bgcolor="white"
      borderRadius={2}
      boxShadow={2}
      maxWidth={400}
      mx="auto"
    >
      <Typography variant="subtitle1" color="gray">
        ID: {user.id}
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          name="name"
          label="Name"
          value={user.name}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          name="email"
          label="Email"
          value={user.email}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          name="phone"
          label="Phone"
          value={user.phone}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          name="address"
          label="Address"
          value={user.address}
          onChange={handleChange}
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Save
        </Button>
      </form>
    </Box>
  );
};

export default UserForm;
