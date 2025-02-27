import ReactQuill from "react-quill";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { updateUser } from "../redux/userSlice";
import { Box, Typography } from "@mui/material";
import "react-quill/dist/quill.snow.css";

const RichTextEditor = () => {
  const bio = useSelector((state: RootState) => state.user.bio);
  const dispatch = useDispatch();

  const handleChange = (value: string) => {
    dispatch(updateUser({ bio: value }));
  };

  return (
    <Box
      p={3}
      bgcolor="white"
      borderRadius={3}
      boxShadow={4}
      maxWidth={600}
      mx="auto"
    >
      <Typography variant="h5" fontWeight="bold" color="primary" mb={2}>
        User Bio
      </Typography>
      <Box
        sx={{
          height: 180,
          overflow: "auto",
          border: "1px solid #ddd",
          borderRadius: "8px",
          backgroundColor: "#f9f9f9",
        }}
      >
        <ReactQuill
          value={bio}
          onChange={handleChange}
          style={{ height: "100%", border: "none" }}
        />
      </Box>
    </Box>
  );
};

export default RichTextEditor;
