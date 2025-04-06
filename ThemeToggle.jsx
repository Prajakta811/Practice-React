import React, { useState } from "react";

const ThemeToggle = () => {
  const [toggle, setToggle] = useState(false);
  const themeClass = toggle ? "lightTheme" : "darkTheme";
  function handleTheme() {
    setToggle((ele) => !ele);
  }

  return (
    <div className={`${themeClass} box`} >
      <button onClick={handleTheme}>{toggle ? "dark" : "light"} </button>
    </div>
  );
};

export default ThemeToggle;
