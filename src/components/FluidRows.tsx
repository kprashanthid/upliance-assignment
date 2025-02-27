import { useTrail, animated } from "@react-spring/web";
import { Box, Paper, Typography, Button } from "@mui/material";
import { useState } from "react";

const rows = ["Row 1", "Row 2", "Row 3"];

const FluidRows = () => {
  const [visible, setVisible] = useState(false);

  const trail = useTrail(rows.length, {
    opacity: visible ? 1 : 0,
    y: visible ? 0 : 50,
    config: { tension: 200, friction: 30, easing: (t) => t * (2 - t) },
    delay: 200,
  });

  return (
    <Box
      p={4}
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={2}
    >
      <Button
        variant="contained"
        color="primary"
        onClick={() => setVisible(!visible)}
        sx={{
          mb: 2,
          py: 1.5,
          borderRadius: "8px",
          transition: "0.3s",
          "&:hover": { transform: "scale(1.05)" },
        }}
      >
        {visible ? "Hide Rows" : "Show Rows"}
      </Button>
      {visible &&
        trail.map((style, index) => (
          <animated.div key={index} style={style}>
            <Paper
              elevation={4}
              sx={{
                p: 3,
                width: 300,
                textAlign: "center",
                borderRadius: "12px",
                backgroundColor: "#90caf9",
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              <Typography variant="h6">{rows[index]}</Typography>
            </Paper>
          </animated.div>
        ))}
    </Box>
  );
};

export default FluidRows;
