import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { actGetSnipperById } from "../store/actions/search/actGetSnipperById";
import { Header } from "../components/Header";
import { actAddSnippet } from "../store/actions/add/actAddSnippet";
import { Editor } from "../components/Editor";

const MySnippet = ({
  onSave,
  getSnippet,
  match: {
    params: { id },
  },
  titleText,
  descriptionText,
  filesArr,
}) => {
  useEffect(() => {
    getSnippet(id);
  }, [id, getSnippet]);

  const [files, setFiles] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setFiles(filesArr);
    setTitle(titleText);
    setDescription(descriptionText);
  }, [filesArr, titleText, descriptionText]);

  const [srcDoc, setSrcDoc] = useState("");

  const html = files?.filter((e) => {
    return e?.type === "html";
  })[0]?.text;
  const css = files?.filter((e) => {
    return e?.type === "css";
  })[0]?.text;
  const javascript = files?.filter((e) => {
    return e?.type === "js";
  })[0]?.text;

  console.log(javascript);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
            <html>
              <body>${html}</body>
              <style>${css}</style>
              <script>${javascript}</script>
            </html>
          `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, javascript]);

  return (
    <>
      <Header />
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Snippet name
        </label>
        <input
          type="email"
          class="form-control"
          placeholder="Default Snippet Name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          Description
        </label>
        <textarea
          class="form-control"
          placeholder="Default Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="1"
        ></textarea>
      </div>
      <div class="col-12">
        <button
          class="btn btn-primary"
          type="submit"
          onClick={() => onSave(title, description, files)}
        >
          Update snippet
        </button>
      </div>
      <br />
      {files?.map((data, index) => {
        return (
          <Editor
            data={data}
            key={index}
            onChange={(newData) => {
              let editor = [...files];
              editor.splice(index, 1, newData);
              setFiles(editor);
            }}
          />
        );
      })}
      <div className="pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
};

const ConnectedSnippet = connect(
  (state) => ({
    titleText:
      state?.promise?.findSnippetById?.payload?.data?.SnippetFind?.[0]?.title,
    descriptionText:
      state?.promise?.findSnippetById?.payload?.data?.SnippetFind?.[0]
        ?.description,
    filesArr:
      state?.promise?.findSnippetById?.payload?.data?.SnippetFind?.[0]?.files,
  }),
  { getSnippet: actGetSnipperById, onSave: actAddSnippet }
)(MySnippet);

export default ConnectedSnippet;
