import { createContext, useState } from "react";

const modalContext = createContext("");

function ContextModal({ children }) {
  const [modal, setModal] = useState([]);

  return (
    <modalContext.Provider value={{ modal, setModal }}>
      {children}
    </modalContext.Provider>
  );
}
export { modalContext, ContextModal };
