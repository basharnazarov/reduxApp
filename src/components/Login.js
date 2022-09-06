import React from "react";
import { connect } from "react-redux";
import "../styles/form.css";
import { loginUser } from "../store/actions";
import { Link } from "react-router-dom";

function Login({ loginUser }) {
  const [form, setForm] = React.useState({ username: "", password: "" });
  return (
    <div className="form">
      <h1>
        {" "}
        <Link to="/" style={{ fontSize: "20px" }}>
          Homepage
        </Link>
        Login{" "}
      </h1>
      <form>
        <input
          placeholder="username"
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />
        <input
          placeholder="password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            loginUser(form);
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { isLoggedIn: state };
};

export default connect(mapStateToProps, { loginUser })(Login);
