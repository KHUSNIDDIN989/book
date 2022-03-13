import React from "react";

import NewCustom from "../../CustomHook/CustomNew";

import Calendar from "../assets/images/home-page/calendar 1.png";
import "./Main.css";

export default function Main(data, zero = 0) {
  const { news, setNews } = NewCustom();
  return (
    <div className="main">
      <div className="main-result">
        <h3>
          Showing <span className="span">{data.data.totalItems}</span> Result(s)
        </h3>
      </div>
      <div className="main-calendar">
        <a
          href="#link"
          onClick={(e) => {
            news === "orderBy=newest" ? setNews("") : setNews("orderBy=newest");
          }}
        >
          <img src={Calendar} alt="calendar" className="main-calendar__img" />
          <p>Order by newest</p>
        </a>
      </div>
    </div>
  );
}
