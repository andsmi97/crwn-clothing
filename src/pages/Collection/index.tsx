import React from "react";
import CollectionItem from "../../components/CollectionItem";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/selectors";

import "./styles.scss";
import { ICollectionItem } from "../../types";

const CollectionPage = ({ collection }: any): JSX.Element => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item: ICollectionItem) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state: any, ownProps: any) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
