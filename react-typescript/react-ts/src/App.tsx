import { Route, Routes } from "react-router-dom";
import "./App.css";
import User from "./pages/User";
import "bootstrap/dist/css/bootstrap.min.css";
import LecturePage from "./pages/LecturePage";
import UserState from "./context/UserState";
import SigninPage from "./pages/SigninPage";
import { ToastContainer } from "react-toastify";
import LectureForm from "./components/forms/LectureForm";

function App() {
  //props drilling

  return (
    <>
      <Routes>
        <Route path="/" element={<SigninPage />} />
        <Route path="/users" element={<User />} />
        <Route
          path="/lectures"
          element={
            <UserState>
              <LecturePage />
            </UserState>
          }
        />
        <Route path="/lectures/add" element={<LectureForm />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
