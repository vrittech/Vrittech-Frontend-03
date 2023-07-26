import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import axios from "axios";
import { errorToast, successToast } from "../services/toastify.service";
import "../assets/login.css";
import { toast } from "react-toastify";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //react hooks
  const navigate = useNavigate();

  const redirectToSignUp = () => {
    navigate("/signup");
  };

  const abc = useContext(LoginContext);

  async function submitHandler(e) {
    e.preventDefault();
    let data = { email, password };

    const SERVER_URL = import.meta.env.VITE_SERVER_URL;

    try {
      const resp = await axios.post(`${SERVER_URL}/users/login`, data);

      if (resp.data.status) {
        // sessionStorage.setItem("isLoggedIn", true);
        abc.setLoggedInUser(resp.data.data.jwt);
        navigate("/home");
        successToast(resp.data.status);
      }
    } catch ({ response }) {
      errorToast(response.data.message);
    }
  }
  return (
    <>
      <Card>
        <Form onSubmit={submitHandler}>
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

export default SignIn;
