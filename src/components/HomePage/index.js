import React from "react";
import Card from "../Card";
import "./styles.scss";
export default () => {
  return (
    <div className="homepage">
      <div className="directory-menu">
        <Card title="HATS" />
        <Card title="JACKETS" />
        <Card title="SNEAKERS" />
        <Card title="WOMENS" />
        <Card title="MENS" />
      </div>
    </div>
  );
};
