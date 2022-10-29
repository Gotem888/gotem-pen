import React from "react";
import { Styles } from "../pages/pages.css";
import {
  Router,
  Route,
  Link,
  Redirect,
  Switch,
  useHistory,
} from "react-router-dom";

export default function Main() {
  return (
    <div className="main-page">
      <div className="form-container">
        <div className="logo-wrapper">
          <img src="../gotempenin.png" alt="gotemPenlogo" />
        </div>
        <div className="btn-wrapper">
          <Link to="/reg" className="main-btn">
            SingUP
          </Link>
          <Link to="/login" className="main-btn">
            SingIN
          </Link>
        </div>
        <Link to="/area" className="main-btn">
          Guest User
        </Link>
      </div>
    </div>
  );
}
