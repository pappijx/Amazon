import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (event) => {
    event.preventDefault(); //stops refresh
    //login code here
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //login the user
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  const register = (event) => {
    event.preventDefault(); //stops refresh
    //register code here
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //register the user
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <h2 className="login__logo">Amazon</h2>
      </Link>
      <div className="login__container">
        <h1>Sign In</h1>
        <form action="">
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
          />

          <button onClick={login} type="submit" className="login__signInButton">
            Sign In
          </button>
        </form>

        <small className="login__policy">
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </small>
        <button onClick={register} className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
 