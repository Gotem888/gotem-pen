import React, { useState } from "react";

export const RegForm = ({ Reg }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setCPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleReset = () => {
    setLogin("");
    setPassword("");
  };

  const Result = () => {
    if (!login || !password || !passwordConfirm) {
      return "all fields must be filled";
    } else if (passwordConfirm != password) {
      return "Wrong password confirmation";
    } else return "OK";
  };
  return (
    <div className="main-page">
      <div className="form-container">
        <div className="logo-wrapper">
          <img src="../gotempenin.png" alt="gotemPenlogo" />
        </div>
        <form name="RegForm" className="RegForm" onSubmit={handleSubmit}>
          <input
            value={login}
            placeholder="Login"
            onChange={(e) => setLogin(e.target.value)}
          />
          <input
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            value={passwordConfirm}
            placeholder="Confirm Password"
            onChange={(e) => setCPassword(e.target.value)}
          />
          <button
            className="form-btn login-btn"
            type="submit"
            id="button"
            disabled={
              !password ||
              !passwordConfirm ||
              !login ||
              passwordConfirm != password
            }
            onClick={() => Reg(login, password)}
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
