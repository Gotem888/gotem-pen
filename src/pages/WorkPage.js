import { connect } from "react-redux";

import { AppArea } from "../pages/AppArea";
import { actAddSnippet } from "../store/actions/add/actAddSnippet";

export const WorkPage = () => {
  return (
    <>
      <ConnectEditorsPage />
    </>
  );
};

const ConnectEditorsPage = connect(null, { onSave: actAddSnippet })(AppArea);
export default ConnectEditorsPage;
