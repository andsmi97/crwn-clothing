import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./styles.scss";
import { IShopData } from "../../types";
import CollectionPreview from "../CollectionPreview";
import { selectCollectionsForPreview } from "../../redux/shop/selectors";

const CollectionsOverview = ({ collections }: any): JSX.Element => (
  <div className="collections-overview">
    {collections.map(({ id, ...rest }: IShopData) => (
      <CollectionPreview key={id} id={id} {...rest} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});
export default connect(mapStateToProps)(CollectionsOverview);
