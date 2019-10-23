import React from "react";
import Bar from "./Bar";
import Form from "./Form";

const ThirdStep = ({ prev, next }) => {
  return (
    <div>
      <Bar />
      <Form prev={prev} next={next} />
    </div>
  );
};

export default ThirdStep;
