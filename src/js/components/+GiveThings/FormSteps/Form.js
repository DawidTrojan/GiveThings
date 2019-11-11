import React, { useState } from "react";
import FirstStep from "../FirstStep";
import SecondStep from "../SecondStep";
import ThirdStep from "../ThirdStep";
import FourthStep from "../FourthStep";
import FifthStep from "../FifthStep";
// import FormThanks from "../FormThanks";

const Form = () => {
  const [currStep, setCurrStep] = useState(1);

  const [form, setForm] = useState({
    type: "",
    bags: null,
    localization: "",
    helpGroups: [],
    specificLocalization: "",
    address: {
      street: "",
      city: "",
      postCode: "",
      phoneNumber: "",
      date: "",
      time: "",
      comments: ""
    }
  });
  const [errors, setErrors] = useState({
    type: "",
    bags: "",
    localization: "",
    helpGroups: "",
    specificLocalization: "",
    address: {
      street: "",
      city: "",
      postCode: "",
      phoneNumber: "",
      date: "",
      time: "",
      comments: ""
    }
  });

  const handleOnChange = e => {
    if (e.target.name === "radio") {
      if (e.target.checked) {
        setForm({
          ...form,
          type: e.target.value
        });
        setErrors({
          ...errors,
          type: ""
        });
      }
    } else if (e.target.name === "bag") {
      setForm({
        ...form,
        bags: e.target.value
      });
      setErrors({
        ...errors,
        bags: ""
      });
    } else if (e.target.name === "localization") {
      setForm({
        ...form,
        localization: e.target.value
      });
    } else if (e.target.type === "checkbox") {
      if (!form.helpGroups.includes(e.target.value)) {
        setForm({
          ...form,
          helpGroups: [...form.helpGroups, e.target.value]
        });
      } else {
        const filtered = form.helpGroups.filter(el => el !== e.target.value);
        setForm({
          ...form,
          helpGroups: filtered
        });
      }
    } else if (e.target.name === "organization") {
      setForm({
        ...form,
        specificLocalization: e.target.value
      });
    } else if (e.target.name === "address") {
      setForm({
        ...form,
        address: {
          ...form.address,
          [e.target.id]: e.target.value
        }
      });
    }
  };

  const validate = () => {
    let isValid = true;

    if (!form.type) {
      isValid = false;
      errors.type = "Musisz zaznaczyć jedno pole!";
    } else {
      errors.type = "";
    }

    if (!form.bags) {
      isValid = false;
      errors.bags = "Musisz wybrać liczbę worków!";
    } else {
      errors.bags = "";
    }

    setErrors({ ...errors });

    return isValid;
  };

  const handleOnSubmit = e => {
    e.preventDefault();

    if (!validate()) {
      return errors;
    }
  };

  const stepNext = () => {
    let nextStep = currStep;
    console.log(form);

    if (currStep === 3) {
      if (!form.helpGroups.length) {
        setErrors({
          ...errors,
          helpGroups: "Komu chcesz pomóc?"
        });
      } else {
        nextStep = nextStep >= 2 ? nextStep + 1 : nextStep + 1;
        setErrors({
          ...errors,
          helpGroups: ""
        });
      }
    } else {
      nextStep = nextStep >= 2 ? nextStep + 1 : nextStep + 1;
    }

    setCurrStep(nextStep);
  };

  const stepPrev = () => {
    let prevStep = currStep;
    console.log(form);

    prevStep = prevStep <= 1 ? 1 : prevStep - 1;

    setCurrStep(prevStep);
  };

  const prevButton = () => {
    if (currStep !== 1) {
      return <button onClick={stepPrev}>Wstecz</button>;
    }

    return null;
  };

  const nextButton = () => {
    if (currStep < 5) {
      return <button onClick={stepNext}>Dalej</button>;
    }

    return null;
  };

  const submitButton = () => {
    if (currStep === 5) {
      return <button type="submit">Potwierdzam</button>;
    }
    return null;
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <FirstStep
        currStep={currStep}
        nextButton={nextButton}
        handleChange={handleOnChange}
        type={form.type}
        error={errors.type}
      />
      <SecondStep
        currStep={currStep}
        prevButton={prevButton}
        nextButton={nextButton}
        handleChange={handleOnChange}
        bags={form.bags}
        error={errors.bags}
      />
      <ThirdStep
        currStep={currStep}
        prevButton={prevButton}
        nextButton={nextButton}
        handleChange={handleOnChange}
        groups={form.helpGroups}
        localization={form.localization}
        organization={form.specificLocalization}
        error={errors.helpGroups}
      />
      <FourthStep
        currStep={currStep}
        prevButton={prevButton}
        nextButton={nextButton}
        handleChange={handleOnChange}
        address={form.address}
      />
      <FifthStep
        currStep={currStep}
        prevButton={prevButton}
        submitButton={submitButton}
        form={form}
      />
    </form>
  );
};

export default Form;
