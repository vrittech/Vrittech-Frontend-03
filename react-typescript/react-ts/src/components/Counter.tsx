import { Button, Card } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByNumber,
  reset,
} from "../slice/counterSlice";
import { Input } from "@mui/material";
import { useState } from "react";

const Counter = () => {
  const [num, setNum] = useState("");
  const dispatch = useDispatch();
  const value = useSelector((state: any) => state.c.value);

  return (
    <Card style={{ margin: "auto", width: "400px" }}>
      <Card.Body className="text-center">{value}</Card.Body>
      <Input
        type="number"
        placeholder="Enter any number to increment"
        onChange={(e) => setNum(e.target.value)}
      />
      <Card.Footer>
        <Button onClick={(e) => dispatch(increment())}>Increment</Button>
        <Button onClick={(e) => dispatch(incrementByNumber(num))}>
          Increment by number
        </Button>
        <Button
          onClick={(e) => dispatch(decrement())}
          className="btn btn-secondary"
        >
          Decrement
        </Button>
        <Button onClick={(e) => dispatch(reset())} className="btn btn-danger">
          Reset
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default Counter;
