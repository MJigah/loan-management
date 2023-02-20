import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import PersonalDetails from "../components/PersonalDetails";
import Declaration from "../components/Declaration";
import EmploymentDetails from "../components/EmploymentDetails";
import LoanDetails from "../components/LoanDetails";
import SalaryDetails from "../components/SalaryDetails";
import { useDispatch, useSelector } from "react-redux";
import { createLoan, reset } from "../feature/loan/loan.slice";
import { useNavigate } from "react-router-dom";
import Congratulations from "../components/Congratulations";

const RequestLoan = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
  };

  const { loan, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.loan
  );

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
    setStepStates({ ...stepStates, step: step - 1 });
  };

  const nextStep = () => {
    setStepStates({ ...stepStates, step: step + 1 });
  };

  const handleChange = (input) => (e) => {
    setStepStates({ ...stepStates, [input]: e.target.value });
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

  const calcLoan = () => {
    var loanAmountInt = parseInt(values.loanAmount);
    var durationInt = parseInt(values.duration);
    var interestInt = parseInt(values.interest);
    const loan_div = loanAmountInt / durationInt;
    const loan_interest = (loanAmountInt * interestInt) / 100;
    const calculatedBal = loan_div + loan_interest;

    return calculatedBal;
  };
  const calculatedPay = calcLoan();
  values.monthlyPayment = calculatedPay.toString();
  const monPay = values.monthlyPayment;

  const submitLoan = () => {
    const {
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
    } = values;

    if (
      fullname === "" ||
      email === "" ||
      membershipNumber === "" ||
      homeAddress === "" ||
      homeNumber === "" ||
      workNumber === "" ||
      employerNumber === "" ||
      department === "" ||
      employerAddress === "" ||
      employmentTerm === "" ||
      loanAmount === "" ||
      duration === "" ||
      loanStart === "" ||
      loanPurpose === "" ||
      interest === "" ||
      monthlyPayment === "" ||
      accountName === "" ||
      accountNumber === "" ||
      salary === "" ||
      mortgage === "" ||
      assetValue === ""
    ) {
      toast.error("Field is missing, Please Fill in the field");
    }
    dispatch(createLoan(values));
  };

  useEffect(() => {
    if (isSuccess && message) {
      toast.success(message);

      if (isError) {
        toast.error(message);
      }
    }

    // dispatch(reset())
  }, [message, navigate, isSuccess, isError, dispatch]);

  if(isSuccess){
    return (<Congratulations />)
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
                  monPay={monPay}
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
                  step={step}
                  handleChange={handleChange}
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
