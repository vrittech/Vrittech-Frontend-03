import { Button, Card } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, reset } from "../slice/counterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector((state: any) => state.c.value);

  return (
    <Card style={{ margin: "auto", width: "400px" }}>
      <Card.Body className="text-center">{value}</Card.Body>
      <Card.Footer>
        <Button onClick={(e) => dispatch(increment())}>Increment</Button>
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
