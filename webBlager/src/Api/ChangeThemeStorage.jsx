import React, { useEffect, useState } from "react";

const ChangeThemeStorage = () => {
  const [toggle, setToggle] = useState(true);
  useEffect(() => {
    const setTheme = localStorage.getItem("theme");
    if (setTheme === "light") {
      setToggle(false);
    } else {
      setToggle(true);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("theme",toggle ? "light" : "dark")
  }, [toggle]);
  function handleTheme(){
    setToggle((ele)=>!ele)
  }
  const themeClass=toggle ?"lightTheme":"darkTheme"
  return (
    <div className={`${themeClass} box`}>
      <button onClick={handleTheme}>{toggle?"dark":"light"}</button>
    </div>
  );
};

export default ChangeThemeStorage;
