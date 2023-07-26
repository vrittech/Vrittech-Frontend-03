import { useEffect, useState } from "react";
import axios from "axios";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { dateFormatter, getCurrentYear } from "../helpers/utils";
import { AddressInterface } from "../interface/user.interface";

const User = () => {
  const [users, setUsers] = useState<Array<any>>([]);
  const [header, setHeader] = useState<Array<string>>([]);

  const getAllUsers = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/users`
    );
    setUsers(data.users);
    // get dynamic headers
    setHeader(Object.keys(data.users[0]));
  };

  const renderObjectCellData = (item: any) => {
    return (
      <table className="table table-bordered">
        <tbody>
          {Object.keys(item).map((key: any, index: number) => {
            return (
              <tr key={index}>
                <td>{key}</td>
                <td>
                  {typeof item[key] === "object"
                    ? renderObjectCellData(item[key])
                    : item[key]}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <>
      <div className="container">
        <h1>Dynamic table </h1>
        <table className="table table-bordered">
          <thead>
            <tr>
              {header.map((tableHeader: string, index: number) => {
                return <th key={index}>{tableHeader.toUpperCase()}</th>;
              })}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user: any, index: number) => {
              return (
                <tr key={index}>
                  {header.map((head: any, hearIndex: any) => {
                    return (
                      <>
                        <td key={hearIndex}>
                          {typeof user[head] === "object"
                            ? renderObjectCellData(user[head])
                            : user[head]}
                        </td>
                      </>
                    );
                  })}
                  <td>
                    <button>
                      <AiFillEdit />
                    </button>
                    <button>
                      <AiFillDelete />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default User;
