import React from "react";

const CollectionsHeader = ({ currentElements }) => {
  return (
    <div className="collections_header">
      <h3>Zorganizowane zbiórki: {currentElements.length}</h3>
      <div className="content_decoration--box">
        <div className="content_decoration" />
      </div>
      {!currentElements.length ? (
        <span>Nie masz jeszcze zorganizowanych zbiórek!</span>
      ) : null}
    </div>
  );
};
export default CollectionsHeader;
