import React from "react";
import { ICollectionItem } from "../../types";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/actions";
import {
  BackgroundImage,
  CollectionFooter,
  CollectionItemContainer,
  AddButton,
  NameContainer,
  PriceContainer
} from "./styles";

const CollectionItem = ({
  item,
  addItem
}: {
  item: ICollectionItem;
  addItem: (item: ICollectionItem) => void;
}): JSX.Element => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <CollectionFooter>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}$</PriceContainer>
      </CollectionFooter>
      <AddButton onClick={() => addItem(item)} inverted>
        ADD TO CART
      </AddButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  addItem: (item: ICollectionItem) => dispatch(addItem(item))
});
export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
