import React from "react";
import "./styles.scss";
import { ICollectionItem } from "../../types";

export default ({
  id,
  name,
  price,
  imageUrl
}: ICollectionItem): JSX.Element => {
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  );
};
