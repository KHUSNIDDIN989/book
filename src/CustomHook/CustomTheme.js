import { useContext } from "react";
import { themeContext } from "../Context/theme";

function CustomTheme() {
  const { theme, setTheme } = useContext(themeContext);
  return { theme, setTheme };
}

export default CustomTheme;
