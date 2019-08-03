import React from "react";
import { Title, Preview, CollectionPreviewContainer } from "./styles";
import { IShopData } from "../../types";
import CollectionItem from "../CollectionItem";

const CollectionPreview = ({ title, items }: IShopData): JSX.Element => {
  return (
    <CollectionPreviewContainer>
      <Title>{title}</Title>
      <Preview>
        {items
          .filter((item, index) => index < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </Preview>
    </CollectionPreviewContainer>
  );
};

export default CollectionPreview;
