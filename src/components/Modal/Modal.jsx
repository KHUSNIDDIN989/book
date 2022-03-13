import React from "react";

import CustomModal from "../../CustomHook/CustomModal";
import Login from "../assets/images/login-img/login.jpg";
import Vector from "../assets/images/home-page/Vector.png";

import "./Modal.css";

function Modal({ data }) {
  const { modal } = CustomModal();
  console.log(modal);
  return (
    <div className={`container-modal`}>
      {data.items?.map((item) => {
        console.log(item.volumeInfo.direction);
        return (
          <div key={Math.random()}>
            <div className="modal">
              <h3>python</h3>
              <img className="vector" width="300" src={Vector} alt="img" />
            </div>
            <img className="card__a" width="300" src={Login} alt="img" />
            <div className="title">
              <p>{item.volumeInfo?.direction}</p>
            </div>
            <div className="all-modal"></div>
            <button className="card__btn">Read</button>
          </div>
        );
      })}
    </div>
  );
}
export default Modal;
