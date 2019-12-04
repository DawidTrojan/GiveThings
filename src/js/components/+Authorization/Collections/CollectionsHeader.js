import React from "react";

const CollectionsHeader = ({ currentElements }) => {
  return (
    <div className="collections_header">
      <h3>Zorganizowane zbiórki: {currentElements.length}</h3>
      <div className="content_decoration__box">
        <div className="content_decoration" />
      </div>
    </div>
  );
};
export default CollectionsHeader;
