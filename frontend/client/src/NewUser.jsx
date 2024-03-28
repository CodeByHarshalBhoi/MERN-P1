import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function NewUser() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();
  const navigate = useNavigate();

  const handleNameChnage = (event) => {
    setName(event.target.value);
  };

  const handleEmailChnage = (event) => {
    setEmail(event.target.value);
  };

  const handheMobileChange = (event) => {
    setMobile(event.target.value);
  };

  const submitData = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/createUser", { name, email, mobile })
      .then((result) => {
        console.log(result);
        navigate("/")
      })
      .catch(err=>console.log(err))
  };

  return (
    <div>
      <Link to="/">Back</Link>
      <form onSubmit={submitData}>
        <h2>Add User</h2>
        <input
          placeholder="Enter Name"
          type="text"
          onChange={handleNameChnage}
        />
        <br />
        <input
          placeholder="Enter Email "
          type="email"
          onChange={handleEmailChnage}
        />
        <br />
        <input
          placeholder="Enter Mobile"
          type="text"
          onChange={handheMobileChange}
        />
        <br />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}
