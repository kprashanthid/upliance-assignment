import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { updateUser, saveUser, loadUser } from "../redux/userSlice";
import { Box, Button, TextField, Typography } from "@mui/material";

interface UserState {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
}

const UserForm = () => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState<UserState>(user);
  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  useEffect(() => {
    setFormData(user);
  }, [user]);

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (isDirty) {
        e.preventDefault();
        e.returnValue =
          "You have unsaved changes. Are you sure you want to leave?";
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [isDirty]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setIsDirty(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(updateUser(formData));
    dispatch(saveUser());
    alert("User data saved!");
    setIsDirty(false);
  };

  return (
    <Box
      p={4}
      bgcolor="white"
      borderRadius={3}
      boxShadow={4}
      maxWidth={400}
      mx="auto"
    >
      <Typography variant="h5" fontWeight="bold" color="primary" mb={2}>
        Edit User Details
      </Typography>
      <form onSubmit={handleSubmit}>
        {(["name", "email", "phone", "address"] as (keyof UserState)[]).map(
          (field) => (
            <TextField
              key={field}
              fullWidth
              name={field}
              label={field.charAt(0).toUpperCase() + field.slice(1)}
              value={formData[field] || ""}
              onChange={handleChange}
              margin="normal"
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "8px",
                  transition: "0.3s",
                  "&:hover": { boxShadow: "0 2px 8px rgba(0,0,0,0.15)" },
                },
              }}
            />
          )
        )}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{
            mt: 2,
            py: 1.5,
            fontSize: "16px",
            borderRadius: "8px",
            transition: "0.3s",
            "&:hover": { transform: "scale(1.05)" },
          }}
        >
          Save
        </Button>
      </form>
    </Box>
  );
};

export default UserForm;
