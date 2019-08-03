import React, { useState, useEffect } from "react";
import CollectionsOverview from "../../components/CollectionsOverview";
import CollectionPage from "../Collection";
import { connect } from "react-redux";
import WithSpinner from "../../components/WithSpinner";
import { Route } from "react-router-dom";
import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";
import { updateCollections } from "../../redux/shop/actions";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const Shop = ({ match, updateCollections }: any): JSX.Element => {
  const [loading, setLoading] = useState<Boolean>(true);
  useEffect(() => {
    let unsubscribeFromSnapshot: any = null;
    const collectionRef = firestore.collection("collections");
    unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      updateCollections(convertCollectionsSnapshotToMap(snapshot));
      setLoading(false);
    });
    return () => unsubscribeFromSnapshot();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="shop-page">
      <Route
        exact
        path={match.path}
        render={props => (
          <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={props => (
          <CollectionPageWithSpinner isLoading={loading} {...props} />
        )}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  updateCollections: (collections: any) =>
    dispatch(updateCollections(collections))
});

export default connect(
  null,
  mapDispatchToProps
)(Shop);
