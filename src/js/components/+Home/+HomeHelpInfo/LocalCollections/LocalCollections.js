import React, { useState } from "react";
import Pagination from "../Pagination";
import elements from "../../../../../assets/localCollectionArray";

const Fundations = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [elementsPerPage] = useState(3);

  //getCurrentElements

  const indexOfLastElement = currentPage * elementsPerPage;
  const indexOfFirstElement = indexOfLastElement - elementsPerPage;
  const currentElements = elements.slice(
    indexOfFirstElement,
    indexOfLastElement
  );

  //change page

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="help_info--content">
      <span className="help_info--title">
        Local, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation.
      </span>
      <div className="help_info--box">
        {currentElements.map(el => (
          <div className="help_info--element" key={el.id}>
            <div className="help_info--elementBox">
              <span className="element_title">{el.title}</span>
              <span className="element_description">{el.description}</span>
            </div>
            <span className="element_side--text">{el.sideText}</span>
          </div>
        ))}
        <Pagination
          elementsPerPage={elementsPerPage}
          totalElements={elements.length}
          paginate={paginate}
        ></Pagination>
      </div>
    </div>
  );
};

export default Fundations;
