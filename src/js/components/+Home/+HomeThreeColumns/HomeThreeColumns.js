import React from "react";

const HomeThreeColumns = ({ currentElements, auth }) => {
  const organizations = !currentElements
    ? null
    : currentElements
        .map(el => el.specificLocalization)
        .filter(item => item !== "");

  const localizations = !currentElements
    ? null
    : currentElements.map(el => el.localization).filter(item => item !== "");

  const bags = !currentElements
    ? null
    : currentElements.map(el => Number(el.bags));

  const sumOfBags =
    !auth.uid || !currentElements.length
      ? 0
      : bags.reduce((prev, curr) => prev + curr);

  return (
    <div className="columns_container">
      <div className="wrapper">
        <div className="columns_box">
          <h3>{sumOfBags}</h3>
          <h4>Completed bags</h4>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
            enim a elit viverra elementuma. Aliquam erat volutpat.
          </span>
        </div>
        <div className="columns_box">
          <h3>{!organizations ? 0 : organizations.length}</h3>
          <h4>Supported organizations</h4>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
            enim a elit viverra elementuma. Aliquam erat volutpat.
          </span>
        </div>
        <div className="columns_box">
          <h3>{!localizations ? 0 : localizations.length}</h3>
          <h4>Organized collections</h4>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
            enim a elit viverra elementuma. Aliquam erat volutpat.
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomeThreeColumns;
