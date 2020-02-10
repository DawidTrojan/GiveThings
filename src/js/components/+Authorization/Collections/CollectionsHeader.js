import React from "react";

const CollectionsHeader = ({ currentElements }) => {
  return (
    <div className="collections_header">
      <h3>Organized collections: {currentElements.length}</h3>
      <div className="content_decoration--box">
        <div className="content_decoration" />
      </div>
      {!currentElements.length ? (
        <span>You don't have any organized collections yet!</span>
      ) : null}
    </div>
  );
};
export default CollectionsHeader;
