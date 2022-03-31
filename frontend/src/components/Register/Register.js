import React from "react";
import "./Register.css";
function Register() {
  return (
    <div className="register">
      <img
        src="https://images.pexels.com/photos/3682838/pexels-photo-3682838.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
        className="registerBg"
      />
      <form className="signin">
        <h1 className="signup1">SIGN IN</h1>

        <input
          name="username"
          type="text"
          placeholder="Username*"
          className="username"
        />
        <input
          name="email"
          type="text"
          placeholder="Email*"
          className="username"
        />
        <input
          name="password"
          type="password"
          placeholder="Password*"
          className="username"
        />
        <button className="registerBtn">Register</button>
      </form>
    </div>
  );
}

export default Register;
