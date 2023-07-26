// 2. Create a state -> provider

import { useState } from "react";
import UserContext from "./UserContext";

const UserState = (props: any) => {
  const [name, setName] = useState("Test User");
  const [age, setAge] = useState(10);

  function setAnyName(nme: any) {
    setName(nme);
  }
  return (
    <UserContext.Provider value={{ name, age, setAnyName }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
