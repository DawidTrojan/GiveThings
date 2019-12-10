import React from "react";
import Loading from "../../../../assets/Loading";
import CollectionsHeader from "./CollectionsHeader";
import CollectionsList from "./CollectionsList";
import Footer from "../../+Home/+HomeFooter";
import Nav from "./Nav";

const Collections = ({ things, auth }) => {
  if (!things) return <Loading />;

  const currentElements = things
    .map(el => (el.authorId === auth.uid ? el : null))
    .filter(item => item !== null)
    .sort((a, b) => {
      if (a.timestamp > b.timestamp) {
        return -1;
      }
      if (a.timestamp < b.timestamp) {
        return 1;
      }
      return 0;
    });

  return (
    <>
      <div className="collections_container">
        <div className="wrapper">
          <Nav email={auth.email} />
          <CollectionsHeader currentElements={currentElements} />
          <CollectionsList currentElements={currentElements} />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Collections;
