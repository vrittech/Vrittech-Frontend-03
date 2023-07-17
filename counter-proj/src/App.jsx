import { useState } from "react";
import "./App.css";
import { Card, Button } from "react-bootstrap";
import { useEffect } from "react";

function App() {
  const [count, setCount] = useState(50);

  const [student, setStudent] = useState(0);
  useEffect(() => {
    console.log("render here", count, student);
  }, [student, count]);

  const changeNameHandler = (e) => {
    setStudent(Math.random());
  };

  function incrementHandler() {
    setCount(count + 1);
    setStudent(student + 1);
  }

  function decrementHandler() {
    setCount((prev) => prev - 1);
  }

  function resetHandler() {
    setCount(50);
  }

  function handleInputChange(e) {
    setCount(count + Number(e.target.value));
  }
  //Form handling
  return (
    <>
      <h1>{count}</h1>
      {/* <button onClick={changeNameHandler}>Change Name</button> */}
      {/* Counter App: */}
      <Card>
        <Card.Body>
          <input
            type="number"
            placeholder="Increment by number here"
            onChange={handleInputChange}
          />
        </Card.Body>
        <Card.Footer>
          <Button variant="primary" className="me-2" onClick={incrementHandler}>
            Increment
          </Button>
          <Button variant="danger" className="me-2" onClick={resetHandler}>
            Reset
          </Button>
          <Button variant="warning" onClick={decrementHandler}>
            Decrement
          </Button>
        </Card.Footer>
      </Card>
    </>
  );
}

export default App;
