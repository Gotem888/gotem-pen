import { React, useState } from "react";
import { actAuthLogOut } from "../store/actions/authorization/actAuthLogOut";
import { connect } from "react-redux";
import { ConnectAvatarUpload } from "../pages/AvatarUpload";
import { ConnectedAvatar } from "./Avatar";

const CLogout = connect(
  (state) => ({ children: "Logout", disabled: !state.auth.token }),
  { onClick: actAuthLogOut }
)("button");

const Header = ({ onSave }) => {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="logoImg">
        <img src="../gotempenin.png" alt="gotemPenlogo" />
      </div>
      <div className="header-tools">
        <div
          className="userLogo"
          onClick={() => setOpen((prevOpen) => !prevOpen)}
        >
          <ConnectedAvatar />
        </div>
        <div className={`${open ? "acc-props" : "acc-props-hidden"}`}>
          <div className="userLogo drop">
            <ConnectAvatarUpload />
          </div>
          <div className="acc-btn">
            <a href="/snippets">LOAD</a>
          </div>
          <CLogout />
        </div>
      </div>
    </header>
  );
};

export { Header, CLogout };
