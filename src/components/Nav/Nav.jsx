import React from "react";
import CustomContext from "../../CustomHook/CustomContext";
import CustomTheme from "../../CustomHook/CustomTheme";

import Logo from "../assets/images/home-page/Group 193.png";
import Search from "../assets/images/home-page/search.png";
import Star from "../assets/images/home-page/star.png";

import "./Nav.css";

function Nav() {
  const { theme, setTheme } = CustomTheme();
  const { setSearch } = CustomContext();

  return (
    <nav className={`nav`}>
      <div className={`nav-logo `}>
        <img src={Logo} alt="logo" className="nav-logo__img" />
      </div>
      <div className="nav-search">
        <img src={Search} alt="search" className="nav-search__img" />
        <label htmlFor="nav-search__input">
          <input
            onKeyPress={(e) => {
              if (e.code === "Enter") {
                setSearch(e.target.value);
                e.target.value = null;
              }
            }}
            type="text"
            name="search"
            id="nav-search__input"
            className="nav-search__input"
            placeholder="search"
          />
        </label>
      </div>
      <div className="nav-logout">
        <img
          onClick={(e) => {
            theme === "light" ? setTheme("dark") : setTheme("light");
          }}
          src={Star}
          alt="star"
          className="nav-logout__img"
        />
        <button type="submit" className="nav-logout__btn">
          LOGOUT
        </button>
      </div>
    </nav>
  );
}

export default Nav;
