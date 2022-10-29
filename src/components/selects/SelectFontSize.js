import React from "react";

const FONTSIZE = [14, 16, 18, 20, 24, 28, 32, 40];

export const SelectFontSize = ({
  fontsizeList = FONTSIZE,
  onChange,
  fontSize,
}) => {
  return (
    <select
      className="selectComp"
      value={fontSize}
      onChange={(e) => onChange(e.target.value)}
    >
      {fontsizeList.map((fontSize) => (
        <option key={fontSize} value={fontSize}>
          {fontSize}
        </option>
      ))}
    </select>
  );
};
