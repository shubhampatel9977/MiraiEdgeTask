import React from "react";
import { useDarkMode } from "../hooks/useDarkMode";
import Icons from "../assets/Icons";


function TopNavbar() {

    const [theme, toggleTheme] = useDarkMode();

  return (
    <>
      <h1>Top nav bar</h1>
        <p>theme - {theme}- {theme === "light" ? <Icons.darkModeIcon /> : <Icons.lightMoodIcon /> }</p>

      <button type="button" onClick={toggleTheme}> mode change</button>
    </>
  );
}

export default TopNavbar;
