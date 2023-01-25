import React, { useState } from "react";
import PersonalDetails from "../components/PersonalDetails";
import Declaration from "../components/Declaration";
import EmploymentDetails from "../components/EmploymentDetails";
import LoanDetails from "../components/LoanDetails";
import SalaryDetails from "../components/SalaryDetails";

const RequestLoan = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  const [stepStates, setStepStates] = useState({
    step: 1,
    fullname: "",
    email: "",
    membershipNumber: "",
    homeAddress: "",
    homeNumber: "",
    workNumber: "",
    employerNumber: "",
    department: "",
    employerAddress: "",
    employmentTerm: "",
    loanAmount: "1000",
    duration: "5",
    loanStart: "",
    loanPurpose: "",
    interest: "2",
    monthlyPayment: "",
    accountName: "",
    accountNumber: "",
    salary: "",
    mortgage: "",
    assetValue: "",
  });

  const prevStep = () => {
    setStepStates({ ...stepStates,
      step: step - 1 });
  };

  const nextStep = () => {
    setStepStates({ ...stepStates,
      step: step + 1 });
  };

  const handleChange = (input) => (e) => {
    setStepStates({...stepStates,
      [input]: e.target.value });
  };
  const {
    step,
    fullname,
    email,
    membershipNumber,
    homeAddress,
    homeNumber,
    workNumber,
    employerNumber,
    department,
    employerAddress,
    employmentTerm,
    loanAmount,
    duration,
    loanStart,
    loanPurpose,
    interest,
    monthlyPayment,
    accountName,
    accountNumber,
    salary,
    mortgage,
    assetValue,
  } = stepStates;

  const values = {
    fullname,
    email,
    membershipNumber,
    homeAddress,
    homeNumber,
    workNumber,
    employerNumber,
    department,
    employerAddress,
    employmentTerm,
    loanAmount,
    duration,
    loanStart,
    loanPurpose,
    interest,
    monthlyPayment,
    accountName,
    accountNumber,
    salary,
    mortgage,
    assetValue,
  };

  const submitLoan = () => {
    console.log(values);
  }

  switch (step) {
    case 1:
      return (
        <div className="loan-container">
          <div className="container">
            <div className="loan-form">
              <div className="loan-title-div">
                <h1>APPLY FOR A NEW LOAN</h1>
              </div>
              <form onSubmit={onSubmit}>
                <PersonalDetails
                  nextStep={nextStep}
                  handleChange={handleChange}
                  values={values}
                  step={step}
                />
              </form>
            </div>
          </div>
        </div>
      );
    case 2:
      return (
        <div className="loan-container">
          <div className="container">
            <div className="loan-form">
            <div className="loan-title-div">
                <h1>APPLY FOR A NEW LOAN</h1>
              </div>
              <form onSubmit={onSubmit}>
                <EmploymentDetails
                  prevStep={prevStep}
                  nextStep={nextStep}
                  values={values}
                  handleChange={handleChange}
                  step={step}
                />
              </form>
            </div>
          </div>
        </div>
      );
    case 3:
      return (
        <div className="loan-container">
          <div className="container">
            <div className="loan-form">
            <div className="loan-title-div">
                <h1>APPLY FOR A NEW LOAN</h1>
              </div>
              <form onSubmit={onSubmit}>
                <LoanDetails
                  prevStep={prevStep}
                  nextStep={nextStep}
                  values={values}
                  handleChange={handleChange}
                  step={step}
                />
              </form>
            </div>
          </div>
        </div>
      );
    case 4:
      return (
        <div className="loan-container">
          <div className="container">
            <div className="loan-form">
            <div className="loan-title-div">
                <h1>APPLY FOR A NEW LOAN</h1>
              </div>
              <form onSubmit={onSubmit}>
                <SalaryDetails
                  prevStep={prevStep}
                  nextStep={nextStep}
                  values={values}
                  handleChange={handleChange}
                  step={step}
                />
              </form>
            </div>
          </div>
        </div>
      );
    case 5:
      return (
        <div className="loan-container">
          <div className="container">
            <div className="loan-form">
            <div className="loan-title-div">
                <h1>APPLY FOR A NEW LOAN</h1>
              </div>
              <form onSubmit={onSubmit}>
                <Declaration
                  step={step}
                  prevStep={prevStep}
                  values={values}
                  submitLoan={submitLoan}
                />
              </form>
            </div>
          </div>
        </div>
      );
    default:
  }
};

export default RequestLoan;
