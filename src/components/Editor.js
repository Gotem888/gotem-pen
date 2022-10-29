import React, { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-xml";
import "ace-builds/src-noconflict/mode-typescript";
import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-cloud9_night";
import "ace-builds/src-noconflict/theme-cloud9_night_low_color";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/theme-tomorrow_night_blue";
import "ace-builds/src-noconflict/theme-tomorrow_night_bright";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/theme-xcode";
import "ace-builds/src-noconflict/theme-kuroir";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/theme-solarized_light";
import "ace-builds/src-noconflict/theme-textmate";
import "ace-builds/src-noconflict/snippets/xml";
import "ace-builds/src-noconflict/snippets/python";
import "ace-builds/src-noconflict/snippets/java";
import "ace-builds/src-noconflict/snippets/markdown";
import "ace-builds/src-noconflict/snippets/json";
import "ace-builds/src-noconflict/snippets/typescript";
import "ace-builds/src-noconflict/snippets/html";
import "ace-builds/src-noconflict/snippets/javascript";
import "ace-builds/src-noconflict/snippets/css";
import "ace-builds/src-min-noconflict/ext-language_tools";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompressAlt, faExpandAlt } from "@fortawesome/free-solid-svg-icons";
import { faRectangleXmark } from "@fortawesome/free-regular-svg-icons";
import { SelectMode } from "../components/selects/SelectMode";
import { SelectTheme } from "./selects/SelectTheme";
import { SelectFontSize } from "./selects/SelectFontSize";

export const Editor = ({
  data = { type: "", name: "", text: "", index: "" },
  onChange,
  onDelete,
  displayName,
}) => {
  const [open, setOpen] = useState(true);
  const [theme, setTheme] = useState("tomorrow");
  const [fontSize, setFontSize] = useState("14");

  if (data.type == "") {
    displayName = (
      <SelectMode
        onChange={(type) =>
          onChange({ type, text: data.text, name: data.name })
        }
        value={data.type}
      />
    );
  } else displayName = data.type;
  if (displayName == "javascript") displayName = "js";

  return (
    <div className={`${open ? "editor-container" : "collabsed"}`}>
      <div className="editor-title">
        {displayName}
        <SelectTheme onChange={setTheme} value={theme} />
        <SelectFontSize onChange={setFontSize} value={fontSize} />
        <div className="btn-wrapper">
          <button
            type="button"
            className="expand-collapse-btn"
            onClick={() => setOpen((prevOpen) => !prevOpen)}
          >
            <FontAwesomeIcon
              className="collapse-icon"
              icon={open ? faCompressAlt : faExpandAlt}
            />
          </button>
          <button className="rectangle-btn" type="button">
            <FontAwesomeIcon
              className="close-btn-icon"
              icon={faRectangleXmark}
              onClick={onDelete}
            />
          </button>
        </div>
      </div>

      <AceEditor
        onChange={(text) =>
          onChange({ type: data.type, text, name: data.name })
        }
        mode={data.type}
        value={data.text}
        theme={theme}
        name={data.type}
        fontSize={+fontSize}
        className="ace-editor-wrapper"
        width="100%"
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 2,
          autoScrollEditorIntoView: true,
        }}
      />
    </div>
  );
};
