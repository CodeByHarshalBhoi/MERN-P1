import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./Users";
import NewUser from "./NewUser";
import UpdateUser from "./UpdateUser";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Users />}></Route>
            <Route path="/create" element={<NewUser />}></Route>
            <Route path="/update/:id" element={<UpdateUser />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
