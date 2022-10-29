import { React, useState } from "react";
import { CLogout } from "./Header";
import { ConnectAvatarUpload } from "../pages/AvatarUpload";

export const AccountProperties = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className={`${open ? "acc-props" : "acc-props-hidden"}`}>
      <div className="userLogo">
        <ConnectAvatarUpload />
      </div>
      <div className="acc-btn">SAVE</div>
      {/* <div className="acc-btn"> */}
      <a className="acc-btn" href="/snippets">
        LOAD
      </a>
      {/* </div> */}
      <CLogout />
    </div>
  );
};
