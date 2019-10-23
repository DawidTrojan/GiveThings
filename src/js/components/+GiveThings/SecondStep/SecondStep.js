import React from "react";
import Bar from "./Bar";
import Form from "./Form";

const SecondStep = ({ prev, next }) => {
  return (
    <div>
      <Bar />
      <Form prev={prev} next={next} />
    </div>
  );
};

export default SecondStep;
