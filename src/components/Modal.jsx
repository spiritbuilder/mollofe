import React from "react";
import "../styles/Modal.scss";
import { AiOutlineClose } from "react-icons/ai";

function Modal({ image, clear }) {
  return (
    <div className="modal-background">
      <AiOutlineClose className="cancel" color="white" size={24} onClick={() => {clear()
        
      }} />
      <div className="modal">
        <img
          className="modal-image"
          src={image.urls.regular}
          alt="unspalsh-pic"
        />
        <div className="details">
          <span className="name">{image.user.name}</span>
          <span className="location">{image.user.location}</span>
        </div>
      </div>
    </div>
  );
}

export default Modal;
