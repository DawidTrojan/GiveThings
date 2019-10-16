import React from "react";

const Pagination = ({
  elementsPerPage,
  totalElements,
  paginate,
  currentPage
}) => {
  const elementsNumber = [];

  for (let i = 1; i <= Math.ceil(totalElements / elementsPerPage); i++) {
    elementsNumber.push(i);
  }

  return (
    <div className="pagination_buttons__box">
      {elementsNumber.length <= 1
        ? null
        : elementsNumber.map(number =>
            currentPage === number ? (
              <span
                className="active"
                onClick={() => paginate(number)}
                key={number}
              >
                {number}
              </span>
            ) : (
              <span onClick={() => paginate(number)} key={number}>
                {number}
              </span>
            )
          )}
    </div>
  );
};

export default Pagination;
