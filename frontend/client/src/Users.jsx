import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Users() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const fetchAllUsers = async () => {
    let res = await axios.get("http://localhost:3000/users");
    console.log(res);
    setUsers(res.data);
  };

  useEffect(() => {
    fetchAllUsers();
  }, [users]);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3000/deleteuser/" + id)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    navigate("/");
  };

  return (
    <div>
      <Link to="/create">Add User</Link>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.mobile}</td>
                <td>
                  <Link to={`update/${user._id}`}>Edit</Link>
                  <button onClick={() => handleDelete(user._id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
