import React from "react";

const THEMES = {
  cloud9_night: "cloud9_night",
  monokai: "monokai",
  github: "github",
  tomorrow: "tomorrow",
  tomorrow_night_blue: "tomorrow_night_blue",
  tomorrow_night_bright: "tomorrow_night_bright",
  kuroir: "kuroir",
  twilight: "twilight",
  xcode: "xcode",
  textmate: "textmate",
  solarized_dark: "solarized_dark",
  solarized_light: "solarized_light",
  terminal: "terminal",
};

export const SelectTheme = ({ themeList = THEMES, onChange, value }) => {
  return (
    <>
      <select
        className="selectComp"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {Object.entries(themeList).map(([value, textth]) => (
          <option className="select-item" value={value} key={value}>
            {textth}
          </option>
        ))}
      </select>
    </>
  );
};
