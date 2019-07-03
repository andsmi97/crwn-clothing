import React from "react";
import "./styles.scss";
import { IShopData } from "../../types";
import CollectionItem from "../CollectionItem";

export default ({ title, items }: IShopData): JSX.Element => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...restProps }) => (
            <CollectionItem key={id} id={id} {...restProps} />
          ))}
      </div>
    </div>
  );
};
