import React, { useState } from "react";
import "../styles/ToggleButton.scss";

type Props = {
  theme: string;
  toggleTheme: () => void;
};

const ToggleButton = ({ theme, toggleTheme }: Props) => {
  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={theme === "light"}
        onChange={toggleTheme}
      />
      <span className="slider"></span>
    </label>
  );
};

export default ToggleButton;
