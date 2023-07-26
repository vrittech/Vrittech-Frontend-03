import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import LoginContext from "../context/LoginContext";

const DataDisplay = () => {
  const [n, sN] = useState("");
  const data: any = useContext(LoginContext);

  return (
    <div>
      {data.name} {data.age}
      <input
        type="text"
        placeholder="Enter name here"
        onChange={(e: any) => sN(e.target.value)}
      />
      <button onClick={(e: any) => data.setAnyName(n)}>Set Name</button>
    </div>
  );
};

export default DataDisplay;
