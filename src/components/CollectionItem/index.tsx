import React from "react";
import "./styles.scss";
import { ICollectionItem } from "../../types";
import CustomButton from "../CustomButton";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/actions";

const CollectionItem = ({ item, addItem }: any): JSX.Element => {
  const { name, price, imageUrl } = item;
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
      <CustomButton onClick={() => addItem(item)} inverted>
        ADD TO CART
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  addItem: (item: ICollectionItem) => dispatch(addItem(item))
});
export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
