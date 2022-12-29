import React, { useState } from "react";

const LoanDetails = ({ prevStep, nextStep, values, handleChange }) => {
  const [loanAmount, setLoanAmount] = useState("1000");
  const [duration, setDuration] = useState("5");
  const [loanStart, setLoanStart] = useState("");
  const [interest, setInterest] = useState("2");
  const [loanPurpose, setloanPurpose] = useState("");

  const calcLoan = () => {
    var loanAmountInt = parseInt(loanAmount);
    var durationInt = parseInt(duration);
    var interestInt = parseInt(interest);
    const loan_div = loanAmountInt / durationInt;
    const loan_interest = (loanAmountInt * interestInt) / 100;
    const calculatedBal = loan_div + loan_interest;
    return calculatedBal;
  };
  const calculatedPay = calcLoan();
  const loanChange = (e) => {
    var newDate = e.target.value;
    setLoanStart(newDate);
  };

  return (
    <>
      <div className="input-group">
        <div className="input-form">
          <label htmlFor="loan_amount">Principal Loan</label>
          <input
            type="number"
            min="1000"
            defaultValue="1000"
            name="loan_amount"
            id="loan_amount"
            onChange={(e) => setLoanAmount(e.target.value)}
          />
        </div>
        <div className="input-form">
          <label htmlFor="loan_start">Effective Date</label>
          <input
            type="date"
            name="loan_start"
            id="loan_start"
            onChange={loanChange}
          />
        </div>
      </div>
      <div className="input-group">
        <div className="input-form">
          <input
            type="text"
            value={values.loanPurpose}
            name="loanPurpose"
            id="loanPurpose"
            placeholder="Purpose of Loan"
            onChange={(e) => setloanPurpose(e.target.value)}
          />
        </div>
      </div>
      <div className="input-group">
        <div className="input-form">
          <label htmlFor="duration">Loan Plan/Duration</label>
          <input
            type="number"
            min="1"
            name="duration"
            defaultValue="5"
            id="duration"
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>
        <div className="input-form">
          <label htmlFor="duration">Interest Rate</label>
          <select id="duration">
            <option value="2" onClick={(e) => setInterest(e.target.value)}>
              2%
            </option>
            <option value="3" onClick={(e) => setInterest(e.target.value)}>
              3%
            </option>
            <option value="4" onClick={(e) => setInterest(e.target.value)}>
              4%
            </option>
            <option value="5" onClick={(e) => setInterest(e.target.value)}>
              5%
            </option>
          </select>
        </div>
      </div>
      <div className="input-group">
        <div className="input-form">
          <label htmlFor="monthly_payment">Monthly Pay</label>
          <input
            type="number"
            name="monthly_payment"
            id="monthly_payment"
            value={calculatedPay}
            disabled="disabled"
          />
        </div>
      </div>
      <div className="submit-loan-form">
        <button type="submit" onClick={prevStep}>
          PREVIOUS
        </button>
        <button type="submit" onClick={nextStep}>
          NEXT
        </button>
      </div>
    </>
  );
};

export default LoanDetails;
