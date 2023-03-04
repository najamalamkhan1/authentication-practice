import React, { useRef, useState } from "react";
import axios from "axios";

function Login() {
  const [statusMsg, setStatusMsg] = useState("");
  const phoneRef = useRef();
  const passwordRef = useRef();
  const submitBtnFunc = (e) => {
    e.preventDefault();
    console.log(phoneRef.current.value);
    console.log(passwordRef.current.value);
    let obj = {
      phoneRef: phoneRef.current.value,
      password: passwordRef.current.value,
    };
    let url = "https://comfortable-gold-belt.cyclic.app/login";
    axios
      .post(url, obj)
      .then((res) => {
        setStatusMsg("Login Success");
        console.log(res);
      })
      .catch((err) => {
        setStatusMsg("Login Failed");
        console.log(err);
      });
  };
  return (
    <>
      <form>
        <div className="mb-3">
          {statusMsg}
          <input
            ref={phoneRef}
            type="number"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <input
            ref={passwordRef}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button
          onClick={submitBtnFunc}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default Login;
