import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import GlobalContext from "../context/GlobalContext";
import { useSelector } from "react-redux";

const SecureRoute = (props: any) => {
  const user = useSelector((state: any) => state.auth.isLoggedin);
  console.log("user", user);
  // const { loginState }: any = useContext(GlobalContext);

  return <>{user ? <Outlet /> : <Navigate to={"/"} />}</>;
};

export default SecureRoute;
