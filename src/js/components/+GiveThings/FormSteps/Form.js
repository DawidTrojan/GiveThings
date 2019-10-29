import React, { useState } from "react";
import FirstStep from "../FirstStep";
import SecondStep from "../SecondStep";
import ThirdStep from "../ThirdStep";
import FourthStep from "../FourthStep";
import FifthStep from "../FifthStep";
import FormThanks from "../FormThanks";

const Form = () => {
  const [currStep, setCurrStep] = useState(1);

  const [isValid, setIsValid] = useState(false);

  const stepNext = () => {
    let nextStep = currStep;
    nextStep = nextStep >= 2 ? nextStep + 1 : nextStep + 1;

    setCurrStep(nextStep);
  };

  const stepPrev = () => {
    let prevStep = currStep;
    prevStep = prevStep <= 1 ? 1 : prevStep - 1;

    setCurrStep(prevStep);
  };

  const prevButton = () => {
    if (currStep !== 1) {
      return <button onClick={stepPrev}>Wstecz</button>;
    }

    return null;
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    setIsValid(true);
  };

  const nextButton = () => {
    if (currStep < 5) {
      return <button onClick={stepNext}>Dalej</button>;
    }
    return null;
  };

  const submitButton = () => {
    if (currStep === 5) {
      return <button onClick={handleOnSubmit}>Potwierdzam</button>;
    }
    return null;
  };

  return !isValid ? (
    <>
      <form>
        <FirstStep currStep={currStep} nextButton={nextButton} />
        <SecondStep
          currStep={currStep}
          prevButton={prevButton}
          nextButton={nextButton}
        />
        <ThirdStep
          currStep={currStep}
          prevButton={prevButton}
          nextButton={nextButton}
        />
        <FourthStep
          currStep={currStep}
          prevButton={prevButton}
          nextButton={nextButton}
        />
        <FifthStep
          currStep={currStep}
          prevButton={prevButton}
          submitButton={submitButton}
        />
      </form>
    </>
  ) : (
    <FormThanks />
  );
};

export default Form;
