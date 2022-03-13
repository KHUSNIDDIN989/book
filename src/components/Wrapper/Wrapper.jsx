import React from "react";
import { useState } from "react";

import CustomModal from "../../CustomHook/CustomModal";
import CustomTheme from "../../CustomHook/CustomTheme";
import bookOpen from "../assets/images/home-page/book-open 1.png";
import Delete from "../assets/images/home-page/delete 1.png";

import "./Wrapper.css";

function Wrapper(data) {
  const { setModal } = CustomModal();
  const { theme } = CustomTheme();
  const [bookmarks, setBookmarks] = useState([]);
  const [more, setMore] = useState(true);
  function getItem(e) {
    // eslint-disable-next-line array-callback-return
    const dataArr = data.data.items?.find((item) => item.id === e.target.id);
    if (!bookmarks.includes(dataArr)) {
      setBookmarks({ ...bookmarks, dataArr });
    }
  }
  function getDelete(e) {
    setBookmarks((item) => item?.filter((item) => item.id !== e.target.id));
  }
  function moreItem(e) {
    const dataModal = data.data.items?.find((item) => item.id === e.target.id);
    if (more) {
      setModal([dataModal, "show"]);
      setMore(false);
    } else {
      setMore(true);
      setModal([dataModal, "hide"]);
    }
  }
  return (
    <div className={`wrapper ${theme}`}>
      <div className="col-4">
        <h1>Bookmarks</h1>
        <p>If you don’t like to read, you haven’t found the right book</p>
        <div className="card-body">
          {bookmarks?.map((data) => {
            return (
              <div key={data.etag} className="col-4__card">
                <div className="card-p">
                  <h3>{data.volumeInfo.title}</h3>
                  <p>{data.volumeInfo.authors}</p>
                </div>
                <div className="card-img">
                  <img className="card-img__1" src={bookOpen} alt="book" />
                  <img
                    id={data.id}
                    onClick={(e) => getDelete(e)}
                    className="card-img__2"
                    src={Delete}
                    alt="delete"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={`col-8 ${theme}`}>
        {data.data.items?.map((data) => {
          return (
            <div key={data.etag} className="col-8__card">
              <img
                src={data.volumeInfo.imageLinks?.thumbnail}
                alt="img"
                className="col-8__card__img"
              />
              <h3>{data.volumeInfo.title}</h3>
              <p>{data.volumeInfo.authors}</p>
              <p>{data.volumeInfo.publishedDate}</p>
              <div className="card-btn">
                <button
                  id={data.id}
                  onClick={(e) => getItem(e)}
                  className="card-btn__book"
                >
                  Bookmark
                </button>
                <button
                  id={data.id}
                  onClick={(e) => moreItem(e)}
                  className="card-btn__more"
                >
                  More Info
                </button>
              </div>
              <a href="#link" className="col-8__card__btn">
                Read
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Wrapper;
