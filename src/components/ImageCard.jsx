import React, { useState, useEffect } from "react";
import "../styles/ImageCard.scss";

function ImageCard({ details, select }) {

    console.log(details, "I am the detail")
  return (
    <>
      <div
        className="image-card"
        onClick={() => {
          select(details);
        }}
      >
        <img className="backgroundimage" src={details.urls.regular} alt="" />

        <div className="contrast">
                  <span className="uname">{ details.user.name}</span>
                  <span className="ulocation">{ details.user.location}</span>
        </div>
      </div>
    </>
  );
}

export default ImageCard;
