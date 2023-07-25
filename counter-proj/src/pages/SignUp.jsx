import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import axios from "axios";
import { successToast } from "../services/toastify.service";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //react hooks
  const navigate = useNavigate();

  const redirectToSignIn = () => {
    navigate("/");
  };

  async function submitHandler(e) {
    e.preventDefault();
    let data = { fullName, email, password };

    const SERVER_URL = import.meta.env.VITE_SERVER_URL;

    const resp = await axios.post(`${SERVER_URL}/users/register`, data);

    if (resp.data.status) {
      navigate("/");
      successToast(resp.data.message);
    }
  }
  return (
    <>
      <Card>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicFullName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter fullName"
              onChange={(e) => setFullName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card>
    </>
  );
};

export default SignUp;
