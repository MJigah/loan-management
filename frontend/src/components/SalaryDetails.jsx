import React, { useState } from 'react'

const SalaryDetails = ({step, prevStep, nextStep, values, handleChange}) => {
  const [accountName, setAccountName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [salary, setSalary] = useState("");
  const [mortgage, setMortgage] = useState("");
  const [assetValue, setAssetValue] = useState("");

  return (
    <>
    <div className="counter"><p>SALARY INFORMATION</p><p>{step}/5</p></div>
      <div className="input-group">
        <div className="input-form">
          <input
            type="text"
            placeholder="Account Name"
            name="accountName"
            id="accountName"
            value={values.accountName}
            onClick={(e) => setAccountName(e.target.value)}
          />
        </div>
        <div className="input-form">
          <input
            type="text"
            placeholder="Account Number"
            name="accountNumber"
            id="accountNumber"
            value={values.accountNumber}
            onClick={(e) => setAccountNumber(e.target.value)}
          />
        </div>
      </div>
      <div className="input-group">
        <div className="input-form">
          <input
            type="text"
            placeholder="Salary"
            name="salary"
            id="salary"
            value={values.salary}
            onChange={(e) => setSalary(e.target.value)}
          />
        </div>
      </div>
      <div className="input-group">
        <div className="input-form">
          <input
            type="text"
            placeholder="Mortgage"
            name="mortgage"
            id="mortgage"
            value={values.mortgage}
            onChange={(e) => setMortgage(e.target.value)}
          />
        </div>
        <div className="input-form">
          <input
            type="text"
            placeholder="Asset Value"
            name="assetValue"
            id="assetValue"
            value={values.assetValue}
            onChange={(e) => setAssetValue(e.target.value)}
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
  )
}

export default SalaryDetails