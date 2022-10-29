import React, { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { Editor } from "../components/Editor";

export const AppArea = ({ onSave }) => {
  const [srcDoc, setSrcDoc] = useState("");
  const [editors, setEditors] = useState([]);
  const topPane = document.getElementById("top-pane");
  const [previewState, setPreviewState] = useState(true);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const Preview = () => {
    editors.length > 0 ? setPreviewState(false) : setPreviewState(true);
    if (previewState) {
      return (
        <div className="pane previewEmpty">YOUR CODE WILL BE DISPLAY HERE</div>
      );
    } else
      return (
        <div className="pane">
          <iframe
            srcDoc={srcDoc}
            title="output"
            sandbox="allow-scripts"
            frameBorder="2px"
            width="100%"
            height="100%"
          />
        </div>
      );
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      const source = { html: "", css: "", javascript: "" };
      editors.forEach(({ type, text }) => (source[type] = text));
      setSrcDoc(`
            <html>
              <body>${source.html}</body>
              <style>${source.css}</style>
              <script>${source.javascript}</script>
            </html>
          `);
    }, 1300);

    return () => clearTimeout(timeout);
  }, [editors]);

  return (
    <div className="main-area">
      <Header />
      <div
        id="top-pane"
        className="pane top-pane"
        onClick={(e) => {
          if (topPane == e.target) {
            setEditors([...editors, { type: "", name: "", text: "" }]);
          }
        }}
      >
        <div className="background-text"></div>
        {editors.map((data, index) => {
          return (
            <Editor
              data={data}
              key={index}
              onDelete={() => setEditors(editors.filter((x) => data !== x))}
              onChange={(newData) => {
                let editor = [...editors];
                editor.splice(index, 1, newData);
                setEditors(editor);
              }}
            />
          );
        })}
      </div>

      <Preview />
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Set Snippet name
        </label>
        <input
          type="email"
          class="form-control"
          placeholder="Snippet name"
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
          rows="1"
          placeholder="Add Your Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div class="col-12">
        <button
          class="btn btn-primary"
          type="submit"
          onClick={() => onSave(title, description, editors)}
        >
          Create snippet
        </button>
      </div>
    </div>
  );
};
