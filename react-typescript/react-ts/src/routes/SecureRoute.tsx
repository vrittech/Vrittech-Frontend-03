import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import GlobalContext from "../context/GlobalContext";

const SecureRoute = (props: any) => {
  // let isLoggedIn: any = localStorage.getItem("isLoggedIn");

  const { loginState }: any = useContext(GlobalContext);

  return <>{loginState.isLoggedIn ? <Outlet /> : <Navigate to={"/"} />}</>;
};

export default SecureRoute;
