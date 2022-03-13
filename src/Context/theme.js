import { createContext, useState } from "react";

const themeContext = createContext("");

function ContextTheme({ children }) {
  const [theme, setTheme] = useState("light");

  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      {children}
    </themeContext.Provider>
  );
}
export { themeContext, ContextTheme };
