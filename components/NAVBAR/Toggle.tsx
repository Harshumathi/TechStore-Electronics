"use client";

import { SunIcon, MoonIcon } from "../Icons";

interface ToggleProps {
  darkMode: boolean;
  onToggle: () => void;
}

const Toggle = ({ darkMode, onToggle }: ToggleProps) => {
  return (
    <button className="theme-toggle" onClick={onToggle}>
      {darkMode ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};

export default Toggle;
