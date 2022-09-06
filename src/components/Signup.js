import React from "react";
import "../styles/form.css";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="form">
      <Link to="/" style={{ fontSize: "20px" }}>
        Homepage
      </Link>
      <h1> Signup</h1>
      <form>
        <input placeholder="name" />
        <input placeholder="email" />
        <input placeholder="password" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Signup;
