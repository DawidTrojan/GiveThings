import React, { useState } from "react";
import Pagination from "./Pagination";
import elements from "../../../../../assets/fundationsArray";

const Fundations = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [elementsPerPage, setElementsPerPage] = useState(3);

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
    <div className="help_info__content">
      <span className="help_info__title">
        Fundacje, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation.
      </span>
      <div className="help_info__box">
        {currentElements.map(el => (
          <div className="help_info__element" key={el.id}>
            <div className="help_info__elementBox">
              <span className="element_title">{el.title}</span>
              <span className="element_description">{el.description}</span>
            </div>
            <span className="element_side__text">{el.sideText}</span>
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
