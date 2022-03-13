import { createContext, useState } from "react";

const newsContext = createContext("");

function ContextNews({ children }) {
    
  const [news, setNews] = useState("dwedw");

  return (
    <newsContext.Provider value={{ news, setNews }}>
      {children}
    </newsContext.Provider>
  );
}
export { newsContext, ContextNews };
