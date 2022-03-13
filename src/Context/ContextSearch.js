import { createContext, useState } from "react";

const searchContext = createContext(null);

function ContextSearch({ children }) {
    
  const [search, setSearch] = useState("python");

  return (
    <searchContext.Provider value={{ search, setSearch }}>
      {children}
    </searchContext.Provider>
  );
}
export { searchContext, ContextSearch };
