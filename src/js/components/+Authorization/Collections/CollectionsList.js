import React, { useState } from "react";
const moment = require("moment");

const CollectionsList = ({ currentElements }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showComments, setShowComments] = useState(false);

  const lastIndex = currentElements.length;

  const stepNext = () => {
    let nextStep = currentPage;

    nextStep = nextStep >= 2 ? nextStep + 1 : nextStep + 1;

    setCurrentPage(nextStep);
    setShowComments(false);
  };

  const stepPrev = () => {
    let prevStep = currentPage;

    prevStep = prevStep <= 1 ? 1 : prevStep - 1;

    setCurrentPage(prevStep);
    setShowComments(false);
  };

  const prevButton = () => {
    if (currentPage !== 1) {
      return (
        <button className="collections_button" onClick={stepPrev}>
          Back
        </button>
      );
    }

    return null;
  };

  const nextButton = () => {
    if (currentPage !== lastIndex && currentElements.length > 1) {
      return (
        <button className="collections_button" onClick={stepNext}>
          Next
        </button>
      );
    }

    return null;
  };

  const handleOnClick = e => {
    if (showComments) {
      setShowComments(false);
    } else {
      setShowComments(true);
    }
  };

  return (
    <>
      {!currentElements.length
        ? null
        : currentElements.map((el, i) =>
            currentPage === i + 1 ? (
              <div key={i} className="collections_list">
                <div className="collections_box" name={i}>
                  <span className="collections_number">{i + 1}.</span>
                  <div className="collections_textBox">
                    <span>Collection date:</span>
                    <span>
                      {moment.unix(el.timestamp.seconds).format("DD/MM/YY")}
                    </span>
                  </div>
                  <div className="collections_textBox">
                    <span>Things:</span>
                    <span>{el.type}</span>
                  </div>
                  <div className="collections_textBox">
                    <span>Bags:</span>
                    <span>{el.bags}</span>
                  </div>
                  {!el.localization ? null : (
                    <div className="collections_textBox">
                      <span>Location:</span>
                      <span>{el.localization}</span>
                    </div>
                  )}
                  {!el.specificLocalization ? null : (
                    <div className="collections_textBox">
                      <span>Organization:</span>
                      <span>{el.specificLocalization}</span>
                    </div>
                  )}
                  <div className="collections_textBox">
                    <span>For whom:</span>
                    <span>{el.helpGroups.map(el => el).join(", ")}</span>
                  </div>
                  <div className="collections_textBox">
                    <span>City:</span>
                    <span>{el.address.city}</span>
                  </div>
                  <div className="collections_textBox">
                    <span>Street:</span>
                    <span>{el.address.street}</span>
                  </div>
                  <div className="collections_textBox">
                    <span>Post code:</span>
                    <span>{el.address.postCode}</span>
                  </div>
                  <div className="collections_textBox">
                    <span>Phone number:</span>
                    <span>{el.address.phoneNumber}</span>
                  </div>
                  <div className="collections_textBox">
                    <span>Pickup date:</span>
                    <span>
                      {moment.unix(el.date.seconds).format("DD/MM/YY")}
                    </span>
                  </div>
                  <div className="collections_textBox">
                    <span>Pickup time:</span>
                    <span>{el.time}</span>
                  </div>
                  {!el.address.comments ? null : (
                    <div className="collections_textBox">
                      <span>Details:</span>
                      <span
                        style={{ cursor: "pointer" }}
                        onClick={handleOnClick}
                      >
                        {!showComments ? "Show" : el.address.comments}
                      </span>
                    </div>
                  )}
                </div>
                <div className="collections_buttons">
                  {prevButton()}
                  {nextButton()}
                </div>
              </div>
            ) : null
          )}
    </>
  );
};
export default CollectionsList;
