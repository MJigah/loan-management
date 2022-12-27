import React, { useState } from "react";

const Analytics = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [loanAmount, setLoanAmount] = useState('1000')
  const [duration, setDuration] = useState('5')
  const [loanStart, setLoanStart] = useState('')
  const [emi, setEmi] = useState('')
  const [interest, setInterest] = useState('2')

  const calcLoan = () => {
    var loanAmountInt = parseInt(loanAmount);
    var durationInt = parseInt(duration);
    var interestInt = parseInt(interest);
    const loan_div = loanAmountInt/durationInt;
    const loan_interest = (loanAmountInt*interestInt)/100;
    const calculatedBal = loan_div + loan_interest;
    return calculatedBal;
  }
  const calculatedPay = calcLoan();
  const loanChange = (e) => {
    var newDate  = e.target.value;
    setLoanStart(newDate);
  }

  return (
    <div className="container">
      <div className="loan-form">
        <form onSubmit={onSubmit}>
          <h1>APPLY FOR A NEW LOAN</h1>
          <div className="input-group">
            <div className="input-form">
              {/* <label htmlFor="full_name">Full Name</label> */}
              <input type="text" placeholder="Full Name" name="full_name" id="full_name" onClick={(e) => setFullname(e.target.value)}/>
            </div>
            <div className="input-form">
              {/* <label htmlFor="email">Email</label> */}
              <input type="text" placeholder="Email" name="email" id="email" onClick={(e) => setEmail(e.target.value)}/>
            </div>
          </div>
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
              <label htmlFor="loan_balance">Loan Balance</label>
              <input
                type="number"
                name="loan_balance"
                id="loan_balance"
                value={loanAmount}
                disabled="disabled"
                // value="0..0"
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
                <option value="2" onClick={(e) => setInterest(e.target.value)}>2%</option>
                <option value="3" onClick={(e) => setInterest(e.target.value)}>3%</option>
                <option value="4" onClick={(e) => setInterest(e.target.value)}>4%</option>
                <option value="5" onClick={(e) => setInterest(e.target.value)}>5%</option>
            </select>
          </div>
          </div>
          <div className="input-group">
            <div className="input-form">
              <label htmlFor="loan_start">Effective Date</label>
              <input type="date" name="loan_start" id="loan_start" onChange={loanChange} />
            </div>
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
          <div className="input-radio-group emi-div">
              <label htmlFor="EMI">EMI:</label>
            <div className="input-radio-form">
              <label>
                <input
                  type="radio"
                  name="EMI"
                  value="Fixed"
                  id="EMI"
                  // checked={true}
                />
                Fixed
              </label>
              <label>
                <input type="radio" name="EMI" value="Reducing" id="EMI" />
                Reducing
              </label>
            </div>
          </div>
          <div className="submit-form">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Analytics;
