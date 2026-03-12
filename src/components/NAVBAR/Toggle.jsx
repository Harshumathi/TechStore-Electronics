import { SunIcon, MoonIcon } from "../Icons.jsx";

const Toggle = ({ darkMode, onToggle }) => {
    return (
        <button className="theme-toggle" onClick={onToggle}>
            {darkMode ? <SunIcon /> : <MoonIcon />}
        </button>
    );
};

export default Toggle;
