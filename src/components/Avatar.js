import React from "react";
import { connect } from "react-redux";

// import "../styles/Header.css";

function Avatar({ link }) {
  return (
    <img
      src={
        link
          ? "http://localhost:3000/" + link
          : `${process.env.PUBLIC_URL}/img/defaultAvatar.png`
      }
      className="avatar"
      alt="avatar"
    ></img>
  );
}

export const ConnectedAvatar = connect((state) => ({
  link: state?.promise?.findUser?.payload?.data?.UserFindOne?.avatar?.url,
}))(Avatar);
