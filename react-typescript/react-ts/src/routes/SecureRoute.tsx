import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import GlobalContext from "../context/GlobalContext";

const SecureRoute = (props: any) => {
  let localData: any = localStorage.getItem("isLoggedIn");

  // const { loginState }: any = useContext(GlobalContext);

  return <>{localData === "true" ? <Outlet /> : <Navigate to={"/"} />}</>;
};

export default SecureRoute;
