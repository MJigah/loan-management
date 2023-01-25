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
            placeholder="Account Number"
            name="accountNumber"
            id="accountNumber"
            defaultValue={values.accountNumber}
            onChange={handleChange('accountNumber')}
          />
        </div>
      </div>
      <div className="input-group">
        <div className="input-form">
          <input
            type="text"
            placeholder="Account Name"
            name="accountName"
            id="accountName"
            defaultValue={values.accountName}
            onChange={handleChange('accountName')}
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
            defaultValue={values.salary}
            onChange={handleChange('salary')}
          />
        </div>
      </div>
      <div className="input-group">
        <div className="input-form">
          <input
            type="text"
            placeholder="Asset Value"
            name="assetValue"
            id="assetValue"
            defaultValue={values.assetValue}
            onChange={handleChange('assetValue')}
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
            defaultValue={values.mortgage}
            onChange={handleChange('mortgage')}
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
  )
}

export default SalaryDetails