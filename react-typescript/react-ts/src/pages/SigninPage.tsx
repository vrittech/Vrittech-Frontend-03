import { useState } from "react";
import { Card, Form } from "react-bootstrap";
import { postData } from "../services/axios.service";
import { useNavigate } from "react-router-dom";

const SigninPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const loginHandler = async (e: any) => {
    e.preventDefault();
    const data = { email, password };

    const response = await postData("users/login", data);

    if (response && response.status) {
      debugger;
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("jwt", response.data.jwt);
      navigate("/lectures");
    }
  };
  return (
    <Card>
      <Form>
        <Form.Group className="mb-4">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            onChange={(event: any) => setEmail(event.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            onChange={(event: any) => setPassword(event.target.value)}
          />
        </Form.Group>
        <button className="btn btn-success" onClick={(e) => loginHandler(e)}>
          Login
        </button>
      </Form>
    </Card>
  );
};

export default SigninPage;
