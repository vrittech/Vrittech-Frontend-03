import { useState, useContext } from "react";
import { Card, Form } from "react-bootstrap";
import { postData } from "../services/axios.service";
import { Navigate, useNavigate } from "react-router-dom";
import GlobalContext from "../context/GlobalContext";
import { useDispatch } from "react-redux";
import { login } from "../slice/authSlice";

const SigninPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const isLoggedInContext: any = useContext(GlobalContext);
  console.log(isLoggedInContext);

  const navigate = useNavigate();

  let isLoggedIn: any = localStorage.getItem("isLoggedIn");

  if (typeof isLoggedIn === "string") {
    isLoggedIn = Boolean(isLoggedIn);
  }

  const loginHandler = async (e: any) => {
    e.preventDefault();
    const data = { email, password };

    const response = await postData("users/login", data);

    if (response && response.status) {
      dispatch(login(response.data.jwt));

      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("jwt", response.data.jwt);

      isLoggedInContext.setIsLoggedIn(response.data.jwt);

      navigate("/lectures");
    }
  };
  return (
    <>
      {isLoggedIn ? (
        <Navigate to="/lectures" />
      ) : (
        <Card
          style={{
            width: "400px",
            height: "auto",
            margin: "auto",
            marginTop: "200px",
          }}
        >
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
            <button
              className="btn btn-success mb-3"
              onClick={(e) => loginHandler(e)}
            >
              Login
            </button>
          </Form>
        </Card>
      )}
    </>
  );
};

export default SigninPage;
