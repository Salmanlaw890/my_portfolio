import React, { useEffect, useState } from "react";

const useThemeSwitch = () => {
  //prefer-color-scheme: is a css property which used for user preferred color
  const preferDarkQuery = "(prefer-color-scheme:dark)";
  const [mode, setMode] = useState("");

  useEffect(() => {
    //The window.matchMedia method is used  to target specific screen sizes, orientations, resolutions, or user preferences like color schemes.
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const userPrefer = window.localStorage.getItem("theme");

    const handleChange = () => {
      if (userPrefer) {
        const check = userPrefer === "dark" ? "dark" : "light";
        setMode(check);
        if (check === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      } else {
        //The mediaQuery.matches property of the MediaQueryList object is a boolean that indicates whether the document currently matches the media query specified
        const check = mediaQuery.matches ? "dark" : "light";
        setMode(check);
        if (check === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  useEffect(() => {
    if (mode === "dark") {
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  return [mode, setMode];
};

export default useThemeSwitch;
