import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function UpdateUser() {
  const {id} = useParams();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/getUser/"+id)
      .then((result) => {
        console.log(result);
        setName(result.data.name);
        setEmail(result.data.email);
        setMobile(result.data.mobile);
      })
      .catch((err) => console.log(err));
  }, []);

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
    axios.put("http://localhost:3000/updateuser/"+id, {name, email, mobile})
    .then((result)=>{
        console.log(result);
        navigate("/")
    })
    .catch((err)=>{
        console.log(err)
    })
    
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
          value={name}
        />
        <br />
        <input
          placeholder="Enter Email"
          type="text"
          onChange={handleEmailChnage}
          value={email}
        />
        <br />
        <input
          placeholder="Enter Mobile"
          type="text"
          onChange={handheMobileChange}
          value={mobile}
        />
        <br />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}
