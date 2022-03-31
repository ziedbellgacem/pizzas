import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="login">
      <img
        src="https://us.123rf.com/450wm/jchizhe/jchizhe1707/jchizhe170700365/82830200-ingr%C3%A9dients-alimentaires-et-%C3%A9pices-pour-la-cuisson-des-champignons-tomates-fromage-oignon-huile-poiv.jpg?ver=6"
        alt=""
        className="loginBg"
      />
      <form className="signup">
        <h1 className="signup1">LOGIN</h1>

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
        <button className="loginBtn">Login</button>
        <Link to="/register"> Create a compte</Link>
      </form>
    </div>
  );
}

export default Login;
