import { connect } from "react-redux";

import { actAuthLogOut } from "../store/actions/authorization/actAuthLogOut";

const NickName = ({ username, onLogOut }) => {
  return (
    <>
      <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <ul class="nav nav-pills">
          <li class="nav-item">
            <a href="/new-snippet" class="nav-link active" aria-current="page">
              {username}
            </a>
          </li>
          <li class="nav-item">
            <a href="/snippets" class="nav-link">
              My Snippets
            </a>
          </li>
          <li class="nav-item">
            <a href="/" class="nav-link" onClick={() => onLogOut()}>
              Log out
            </a>
          </li>
        </ul>
      </header>
    </>
  );
};

const ConnectedNickName = connect(
  (state) => ({
    username: state?.auth?.payload?.sub?.login,
    logedIn: state.auth.token,
  }),
  { onLogOut: actAuthLogOut }
)(NickName);
export default ConnectedNickName;
