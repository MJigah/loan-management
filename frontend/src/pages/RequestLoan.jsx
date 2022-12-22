import React from "react";

const Analytics = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <div className="loan-form">
        <form onSubmit={onSubmit}>
          <h1>Apply For a New Loan</h1>
          <div className="input-group">
            <div className="input-form">
              <label htmlFor="full_name">Full Name</label>
              <input type="text" name="full_name" id="full_name" />
            </div>
            <div className="input-form">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
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
              />
            </div>
            <div className="input-form">
              <label htmlFor="loan_balance">Loan Balance</label>
              <input
                type="number"
                name="loan_balance"
                id="loan_balance"
                value="0.0"
                disabled="disabled"
              />
            </div>
          </div>
          <div className="input-form">
            <label htmlFor="duration">Loan Plan/Duration</label>
            <input
              type="number"
              min="1"
              name="duration"
              defaultValue="1"
              id="duration"
            />
          </div>
          <div className="input-group">
            <div className="input-form">
              <label htmlFor="loan_start">Effective Date</label>
              <input type="date" name="loan_start" id="loan_start" />
            </div>
            <div className="input-form">
              <label htmlFor="loan_end">Expiry date</label>
              <input
                type="date"
                name="loan_end"
                id="loan_end"
                disabled="disabled"
              />
            </div>
          </div>
          <hr />
          <div className="input-radio-group">
              <label htmlFor="EMI">EMI:</label>
            <div className="input-radio-form">
              <label>
                <input
                  type="radio"
                  name="EMI"
                  value="Fixed"
                  id="EMI"
                  checked={true}
                />
                Fixed
              </label>
              <label>
                <input type="radio" name="EMI" value="Reducing" id="EMI" />
                Reducing
              </label>
            </div>
            <div className="input-form">
              <label htmlFor="monthly_payment">Monthly Pay</label>
              <input
                type="number"
                name="monthly_payment"
                id="monthly_payment"
                disabled="disabled"
              />
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
