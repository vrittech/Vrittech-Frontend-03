import { Route, Routes } from "react-router-dom";
import "./App.css";
import User from "./pages/User";
import "bootstrap/dist/css/bootstrap.min.css";
import LecturePage from "./pages/LecturePage";
import UserState from "./context/UserState";
import SigninPage from "./pages/SigninPage";
import { ToastContainer } from "react-toastify";
import LectureForm from "./components/forms/LectureForm";
import EditLecturePage from "./pages/EditLecturePage";
import SecureRoute from "./routes/SecureRoute";
import NoPageFound from "./pages/NoPageFound";

function App() {
  //props drilling

  return (
    <>
      <Routes>
        <Route path="/" element={<SigninPage />} />
        <Route path="" element={<SecureRoute />}>
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
          <Route path="/lec/:lectureId" element={<EditLecturePage />} />
        </Route>
        <Route path="*" element={<NoPageFound />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
