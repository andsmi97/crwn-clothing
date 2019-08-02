import React from "react";
import "./styles.scss";
import { withRouter } from "react-router-dom";
const MenuItem = ({
  title,
  imageUrl,
  size,
  history,
  linkUrl
}: any): JSX.Element => {
  return (
    <div
      className={`${size ? size : ""} menu-item`}
      onClick={() => history.push(`/${linkUrl}`)}
    >
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

export default withRouter(MenuItem);
