import React from "react";
import "./styles.scss";
import { IMenuItem } from "../../types";
export default ({ title, imageUrl, size }: IMenuItem): JSX.Element => {
  return (
    <div className={`${size ? size : ""} menu-item`}>
      <div
        style={{
          backgroundImage: `url(${imageUrl})`
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
