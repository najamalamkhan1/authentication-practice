import React from "react";
import { Link } from "react-router-dom";

function Front() {
  return (
    <>
      <div
        className="container mt-5 text-center"
        style={{ border: "1px solid", boxShadow: "2px 0px 5px 2px black" }}
      >
        <h4 className="text-center">Login Or Signup</h4>
        <Link to={"/login"} className="btn btn-primary">
          Login
        </Link>
        <span>Or</span>
        <Link to={"/Signup"} className="btn btn-warning">
          Signup
        </Link>
      </div>
    </>
  );
}

export default Front;
