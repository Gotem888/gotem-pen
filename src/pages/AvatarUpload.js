import { connect } from "react-redux";
import { useDropzone } from "react-dropzone";

import { actFullAvatar } from "../store/actions/add/actFullAvatar";
import { ConnectedAvatar } from "../components/Avatar";

const AvatarUpload = ({ onUpload }) => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  let files = acceptedFiles.map((file) => onUpload(file));

  console.log(files);

  return (
    <div {...getRootProps({})}>
      <input {...getInputProps()} />
      <ConnectedAvatar />
    </div>
  );
};

export const ConnectAvatarUpload = connect(null, { onUpload: actFullAvatar })(
  AvatarUpload
);
