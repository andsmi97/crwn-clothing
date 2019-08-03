import React from "react";
import CollectionItem from "../../components/CollectionItem";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/selectors";
import { ICollectionItem } from "../../types";

import {
  TitleContainer,
  CollectionPageContainer,
  ItemsContainer
} from "./styles";

const CollectionPage = ({ collection }: any): JSX.Element => {
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <TitleContainer>{title}</TitleContainer>
      <ItemsContainer>
        {items.map((item: ICollectionItem) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </ItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state: any, ownProps: any) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
