import { Route, Routes } from "react-router-dom";
import "./App.css";
import User from "./pages/User";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<User />} />
      </Routes>
    </>
  );
}

export default App;
