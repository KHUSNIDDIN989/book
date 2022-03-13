import React from "react";
import ReactDOM from "react-dom";

import { ContextSearch } from "./Context/ContextSearch";
import { ContextNews } from "./Context/News";
import { ContextTheme } from "./Context/theme";
import { ContextModal } from "./Context/ContextModal";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <ContextSearch>
      <ContextTheme>
        <ContextNews>
          <ContextModal>
            <App />
          </ContextModal>
        </ContextNews>
      </ContextTheme>
    </ContextSearch>
  </React.StrictMode>,
  document.getElementById("root")
);
