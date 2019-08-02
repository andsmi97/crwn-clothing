import React from "react";
import CollectionsOverview from "../../components/CollectionsOverview";
import CollectionPage from "../Collection";

import { Route } from "react-router-dom";

const Shop = ({ match }: any): JSX.Element => {
  return (
    <div className="shop-page">
      <Route exact path={match.path} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default Shop;
