import React, { useState } from "react";

const LoanDetails = ({ step, prevStep, nextStep, values, monPay, handleChange }) => {
  const [monthlyPay, setMonthlyPay] = useState(monPay)
  return (
    <>
    <div className="counter"><p>LOAN INFORMATION</p><p>{step}/5</p></div>
      <div className="input-group">
        <div className="input-form">
          <label htmlFor="loan_amount">Principal Loan</label>
          <input
            type="number"
            min="1000"
            name="loanAmount"
            id="loanAmount"
            defaultValue={values.loanAmount ? values.loanAmount : '1000'}
            onChange={handleChange('loanAmount')}
          />
        </div>
      </div>
      <div className="input-group">
        <div className="input-form">
          <label htmlFor="loan_start">Effective Date</label>
          <input
            type="date"
            name="loanStart"
            id="loanStart"
            defaultValue={values.loanStart}
            onChange={handleChange('loanStart')}
          />
        </div>
      </div>
      <div className="input-group">
        <div className="input-form">
          <input
            type="text"
            defaultValue={values.loanPurpose ? values.loanPurpose : ''}
            id="loanPurpose"
            placeholder="Purpose of Loan"
            onChange={handleChange('loanPurpose')}
          />
        </div>
      </div>
      <div className="input-group">
        <div className="input-form">
          <label htmlFor="interest">Interest Rate</label>
          <select id="interest">
            <option defaultValue={values.interest ? values.interest : '2'} onClick={handleChange('interest')}>
              2
            </option>
            <option defaultValue={values.interest ? values.interest : '3'} onClick={handleChange('interest')}>
              3
            </option>
            <option defaultValue={values.interest ? values.interest : '4'} onClick={handleChange('interest')}>
              4
            </option>
            <option defaultValue={values.interest ? values.interest : '5'} onClick={handleChange('interest')}>
              5
            </option>
          </select>
        </div>
      </div>
      <div className="input-group">
        <div className="input-form">
          <label htmlFor="duration">Loan Plan/Duration</label>
          <input
            type="number"
            min="1"
            name="duration"
            id="duration"
            defaultValue={values.duration ? values.duration : '5'}
            onChange={handleChange('duration')}
          />
        </div>
      </div>
      <div className="input-group">
        <div className="input-form">
          <label htmlFor="monthly_payment">Monthly Pay</label>
          <input
            type="text"
            name="monthlyPayment"
            id="monthlyPayment"
            defaultValue={monthlyPay}
            onChange={handleChange('monthlyPayment')}
            disabled="disabled"
          />
        </div>
      </div>
      <div className="submit-loan-form">
        <button className="prev" type="submit" onClick={prevStep}>
          PREVIOUS
        </button>
        <button className="next" type="submit" onClick={nextStep}>
          NEXT
        </button>
      </div>
    </>
  );
};

export default LoanDetails;
