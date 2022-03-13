import React, { useState, useEffect } from "react";

import CustomTheme from "./CustomHook/CustomTheme";
import NewCustom from "./CustomHook/CustomNew";
import CustomContext from "./CustomHook/CustomContext";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import Wrapper from "./components/Wrapper/Wrapper";
import Modal from "./components/Modal/Modal";

import "./App.css";

function App() {
  const { theme } = CustomTheme();
  const { news } = NewCustom();
  const { search } = CustomContext();

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${search}&${news}&maxResults=9`
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [search, news]);

  return (
    <div className={`container-fluid ${theme}`}>
      <Modal data={data} />
      <Nav />
      <Main data={data} />
      <Wrapper data={data} />
    </div>
  );
}

export default App;
