import ReactQuill from "react-quill";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { updateUser } from "../redux/userSlice";
import { Box, Typography } from "@mui/material";

const RichTextEditor = () => {
  const bio = useSelector((state: RootState) => state.user.bio);
  const dispatch = useDispatch();

  const handleChange = (value: string) => {
    dispatch(updateUser({ bio: value }));
  };

  return (
    <Box
      p={3}
      height={200}
      bgcolor="white"
      borderRadius={2}
      boxShadow={2}
      maxWidth={600}
      mx="auto"
    >
      <Typography variant="h5" mb={2}>
        User Bio
      </Typography>
      <ReactQuill value={bio} onChange={handleChange} />
    </Box>
  );
};

export default RichTextEditor;
