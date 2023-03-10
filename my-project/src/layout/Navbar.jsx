import { useContext } from "react";
import { ThemeContext } from "../store/theme-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon as faMoonSolid } from "@fortawesome/free-solid-svg-icons";
import { faMoon as faMoonRegular } from "@fortawesome/free-regular-svg-icons";

const Navbar = (props) => {
  const ctx = props.ctx;
  const colors = ctx.theme.colors;

  const switchThemeHandler = () => {
    ctx.theme.isDark
      ? ctx.setTheme({ type: "LIGHT" })
      : ctx.setTheme({ type: "DARK" });
  };

  return (
    <header>
      <nav
        className={`w-full flex justify-between items-center navbar sm:px-16 px-4 py-8 ${colors.elements} drop-shadow-md transition-colors`}
      >
        <h1 className={`${colors.text} font-extrabold text-xl`}>
          Where in the world?
        </h1>
        <div
          onClick={switchThemeHandler}
          className="flex gap-4 items-center cursor-pointer"
        >
          <FontAwesomeIcon
            icon={ctx.theme.isDark ? faMoonSolid : faMoonRegular}
            color={ctx.theme.isDark ? "white" : null}
          />
          <span className={`${colors.text} font-semibold`}>Dark Mode</span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
