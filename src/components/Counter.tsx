import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { increment, decrement, reset, setCounter } from "../redux/counterSlice";
import { useSpring, animated } from "@react-spring/web";
import { Box, Button, Typography } from "@mui/material";
import { useEffect } from "react";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedCount = localStorage.getItem("counterValue");
    if (savedCount) {
      dispatch(setCounter(parseInt(savedCount, 10)));
    }
  }, [dispatch]);

  const bgColor = useSpring({
    backgroundColor: `rgba(0, 128, 255, ${Math.min(count / 10, 1)})`,
  });

  return (
    <animated.div
      style={{
        ...bgColor,
        padding: "24px",
        borderRadius: "12px",
        textAlign: "center",
        height: "220px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography variant="h4" fontWeight="bold" color="primary">
        Counter: {count}
      </Typography>
      <Box mt={3} display="flex" justifyContent="center" gap={2}>
        {["Increment", "Decrement", "Reset"].map((label, index) => (
          <Button
            key={index}
            variant="contained"
            sx={{
              fontSize: { xs: "10px", sm: "14px", md: "16px", lg: "18px" },
              padding: { xs: "10px 16px", sm: "8px 16px", md: "10px 20px" },
              borderRadius: "8px",
              transition: "0.3s",
              "&:hover": { transform: "scale(1.05)" },
            }}
            color={
              label === "Reset"
                ? "inherit"
                : label === "Increment"
                ? "primary"
                : "secondary"
            }
            onClick={() =>
              dispatch(
                label === "Increment"
                  ? increment()
                  : label === "Decrement"
                  ? decrement()
                  : reset()
              )
            }
          >
            {label}
          </Button>
        ))}
      </Box>
    </animated.div>
  );
};

export default Counter;
