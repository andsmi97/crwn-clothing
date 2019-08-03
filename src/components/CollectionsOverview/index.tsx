import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { CollectionOverviewContainer } from "./styles";
import { IShopData } from "../../types";
import CollectionPreview from "../CollectionPreview";
import { selectCollectionsForPreview } from "../../redux/shop/selectors";

const CollectionsOverview = ({ collections }: any): JSX.Element => (
  <CollectionOverviewContainer>
    {collections.map(({ id, ...rest }: IShopData) => (
      <CollectionPreview key={id} id={id} {...rest} />
    ))}
  </CollectionOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
