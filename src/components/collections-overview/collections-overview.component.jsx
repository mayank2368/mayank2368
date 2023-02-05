import React from "react";
import "./collection-overview.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../preview-component/collection-preview.component";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selector";

const CollectionOverview = ({ collections }) => {
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});
export default connect(mapStateToProps)(CollectionOverview);
