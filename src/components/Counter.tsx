// src/components/Counter.tsx
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { increment, decrement, reset } from "../redux/counterSlice";
import { useSpring, animated } from "@react-spring/web";
import { Box, Button, Typography } from "@mui/material";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  const bgColor = useSpring({
    backgroundColor: `rgba(0, 128, 255, ${Math.min(count / 10, 1)})`,
  });

  return (
    <animated.div
      style={{
        ...bgColor,
        padding: "20px",
        borderRadius: "10px",
        textAlign: "center",
        height: "200px",
      }}
    >
      <Typography variant="h4">Counter: {count}</Typography>
      <Box mt={5} height={50} display="flex" justifyContent="center" gap={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => dispatch(increment())}
        >
          Increment
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </Button>
        <Button
          variant="contained"
          color="inherit"
          onClick={() => dispatch(reset())}
        >
          Reset
        </Button>
      </Box>
    </animated.div>
  );
};

export default Counter;
