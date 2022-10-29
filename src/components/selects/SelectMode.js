const LANGUAGES = {
  mode: "Choose Editor Mode",
  javascript: "javascript",
  java: "java",
  python: "python",
  xml: "xml",
  markdown: "markdown",
  json: "json",
  html: "html",
  typescript: "typescript",
  css: "css",
};

export const SelectMode = ({ langList = LANGUAGES, onChange, value }) => {
  return (
    <>
      <select
        label="Choose mode"
        className="selectComp"
        name="mode"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {Object.entries(langList).map(([value, text]) => (
          <option className="select-item" value={value} key={value}>
            {text}
          </option>
        ))}
      </select>
    </>
  );
};
