import React, { useState } from "react";
import { IShopData } from "../../types";
import { data } from "./data";
import CollectionPreview from "../../components/CollectionPreview";

export default (): JSX.Element => {
  const [collections] = useState<IShopData[]>(data);
  return (
    <div className="shop-page">
      {collections.map(({ id, ...rest }) => (
        <CollectionPreview key={id} id={id} {...rest} />
      ))}
    </div>
  );
};
