import React, { useState } from "react";

export const LoginForm = ({ onLogin }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleReset = () => {
    setLogin("");
    setPassword("");
  };

  const Result = () => {
    if (!login || !password) {
      return "all fields must be filled";
    } else if (login.length < 5) {
      return "'Login' must contain 5 symbols";
    } else if (login.length >= 5 && password.length < 3) {
      return "'Password' must contain 8 symbols";
    } else return "OK";
  };

  return (
    <div className="main-page">
      <div className="form-container">
        <div className="logo-wrapper">
          <img src="../gotempenin.png" alt="gotemPenlogo" />
        </div>

        <form
          name="LoginForm"
          className="loginForm"
          onSubmit={handleSubmit}
          onReset={handleReset}
        >
          <input
            value={login}
            placeholder="Login"
            onChange={(e) => setLogin(e.target.value)}
          />
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="form-btn login-btn"
            id="button"
            disabled={
              !login || !password || login.length < 5 || password.length < 4
            }
            onClick={() => onLogin(login, password)}
          >
            <Result />
          </button>
          <div className="back-to-main-btn">
            <a href="/">BACK TO MAIN</a>
          </div>
        </form>
      </div>
    </div>
  );
};
