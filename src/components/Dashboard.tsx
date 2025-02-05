import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Box, Typography, Paper } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const user = useSelector((state: RootState) => state.user);

  const chartData = [
    { name: "Counter", value: count },
    { name: "Profile", value: user.name ? 1 : 0 },
  ];

  return (
    <Box p={3}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h6">User Profile Completion</Typography>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#1976D2" />
          </BarChart>
        </ResponsiveContainer>
      </Paper>
    </Box>
  );
};

export default Dashboard;
