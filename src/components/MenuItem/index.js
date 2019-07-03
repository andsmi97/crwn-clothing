import React from "react";
import "./styles.scss";

export default ({ title, img, size }) => {
  return (
    <div className={`${size ? size : ""} menu-item`}>
      <div
        style={{
          backgroundImage: `url(${img})`
        }}
        className="background-image"
      />
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};
