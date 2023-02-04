import React from "react";

import CollectionPreview from "../../components/preview-component/collection-preview.component.jsx";

const ShopPage = ({ collections }) => {
  return (
    <div className="shop-page">
      <CollectionPreview />
    </div>
  );
};

export default ShopPage;
