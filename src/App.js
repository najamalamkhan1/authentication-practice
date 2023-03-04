import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Front from "./components/Front";
import Home from "./components/Home";
import Users from "./components/Users";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Logout from "./components/Logout";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Front />} />
        <Route path="/home" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </>
  );
}

export default App;
