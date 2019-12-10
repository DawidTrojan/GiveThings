import React, { useState } from "react";
import FirstStep from "../FirstStep";
import SecondStep from "../SecondStep";
import ThirdStep from "../ThirdStep";
import FourthStep from "../FourthStep";
import FifthStep from "../FifthStep";
import FormThanks from "../FormThanks";

const Form = ({ giveThings, error, isLoading }) => {
  const [currStep, setCurrStep] = useState(1);
  const [isValid, setIsValid] = useState(true);
  const [isReady, setIsReady] = useState(false);

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
      comments: ""
    },
    date: new Date(),
    time: "12:00"
  });
  const [errors, setErrors] = useState({
    type: "",
    bags: "",
    helpGroups: "",
    localization: "",
    address: {
      street: "",
      city: "",
      postCode: "",
      phoneNumber: "",
      comments: ""
    },
    date: "",
    time: ""
  });

  const handleDateOnChange = val => {
    setForm({
      ...form,
      date: val
    });
    setErrors({
      ...errors,
      date: ""
    });
  };

  const handleTimeOnChange = (e, val) => {
    setForm({
      ...form,
      time: val
    });
  };

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
      setErrors({
        ...errors,
        localization: ""
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
      setErrors({
        ...errors,
        localization: ""
      });
    } else if (e.target.name === "address") {
      setForm({
        ...form,
        address: {
          ...form.address,
          [e.target.id]: e.target.value
        }
      });
      setErrors({
        ...errors,
        address: {
          ...errors.address,
          [e.target.id]: ""
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

    if (!form.helpGroups.length) {
      isValid = false;
      errors.helpGroups = "Musisz wybrać komu chcesz pomóc!";
    } else {
      errors.helpGroups = "";
    }

    if (!form.localization && !form.specificLocalization) {
      isValid = false;
      errors.localization = "Musisz wybrać miasto!";
    } else {
      errors.localization = "";
    }

    if (form.address.street.length < 2) {
      isValid = false;
      errors.address.street =
        "Nazwa ulicy powinna mieć przynajmniej dwa znaki!";
    } else {
      errors.address.street = "";
    }

    if (form.address.city.length < 2) {
      isValid = false;
      errors.address.city = "Nazwa miasta powinna mieć przynajmniej dwa znaki!";
    } else {
      errors.address.city = "";
    }

    if (!/^([0-9]{2})(-[0-9]{3})?$/.test(form.address.postCode)) {
      isValid = false;
      errors.address.postCode = "Błędny kod pocztowy!";
    } else {
      errors.address.postCode = "";
    }

    if (
      form.address.phoneNumber.length !== 9 ||
      !Number(form.address.phoneNumber)
    ) {
      isValid = false;
      errors.address.phoneNumber = "Numer powinien mieć 9 cyfr!";
    } else {
      errors.address.phoneNumber = "";
    }

    if (form.date < new Date()) {
      isValid = false;
      errors.date = "Wybierz późniejszą datę!";
    } else if (form.date.getDay() === 6 || form.date.getDay() === 0) {
      isValid = false;
      errors.date = "Wybierz datę od poniedziałku do piątku!";
    } else {
      errors.date = "";
    }

    if (!form.time || form.time.charAt(0) < 1 || form.time.charAt(1) > 7) {
      isValid = false;
      errors.address.time = "Wybierz godzinę pomiędzy 10 a 17";
    } else {
      errors.address.time = "";
    }

    setErrors({ ...errors });

    return isValid;
  };

  const handleOnSubmit = e => {
    e.preventDefault();

    if (!validate()) {
      setIsValid(false);
      return errors;
    }
    giveThings(form);

    if (!error) {
      setIsReady(true);
    }
  };

  const stepNext = () => {
    let nextStep = currStep;

    nextStep = nextStep >= 2 ? nextStep + 1 : nextStep + 1;

    setCurrStep(nextStep);

    if (nextStep === 5) {
      window.scrollTo(0, 880);
    } else {
      window.scrollTo(0, 1160);
    }
  };

  const stepPrev = () => {
    let prevStep = currStep;
    window.scrollTo(0, 1160);

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
      return (
        <button type="submit" className="send_form">
          Potwierdzam
        </button>
      );
    }
    return null;
  };

  return (
    <>
      {!isReady ? (
        <form
          style={isLoading ? { background: "black" } : null}
          onSubmit={handleOnSubmit}
        >
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
            localizationError={errors.localization}
          />
          <FourthStep
            currStep={currStep}
            prevButton={prevButton}
            nextButton={nextButton}
            handleChange={handleOnChange}
            handleDate={handleDateOnChange}
            handleTime={handleTimeOnChange}
            address={form.address}
            currentDate={form.date}
            currentTime={form.time}
            error={errors.address}
            dateError={errors.date}
            form={form}
          />
          <FifthStep
            currStep={currStep}
            prevButton={prevButton}
            submitButton={submitButton}
            form={form}
            isValid={isValid}
            errors={errors}
          />
        </form>
      ) : (
        <FormThanks isLoading={isLoading} isReady={isReady} />
      )}
    </>
  );
};

export default Form;
