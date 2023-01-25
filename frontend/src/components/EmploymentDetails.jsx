import React, { useState } from "react";

const EmploymentDetails = ({ step, prevStep, nextStep, values, handleChange }) => {

  return (
    <>      
    <div className="counter"><p>EMPLOYMENT INFORMATION</p><p>{step}/5</p></div>
      <div className="input-group">
        <div className="input-form">
          <input
            type="text"
            placeholder="Employer's Number"
            name="employerNumber"
            id="employerNumber"
            defaultValue={values.employerNumber}
            onChange={handleChange('employerNumber')}
          />
        </div>
      </div>
      <div className="input-group">
        <div className="input-form">
          <input
            type="text"
            placeholder="Department"
            name="department"
            id="department"
            defaultValue={values.department}
            onChange={handleChange('department')}
          />
        </div>
      </div>
      <div className="input-group">
        <div className="input-form">
          <input
            type="text"
            placeholder="Employer's Address"
            name="employerAddress"
            id="employerAddress"
            defaultValue={values.employerAddress}
            onChange={handleChange('employerAddress')}
          />
        </div>
      </div>
      <div className="input-group">
        <div className="input-form">
          <input
            type="text"
            placeholder="Employment Term"
            name="employmentTerm"
            id="employmenyTerm"
            defaultValue={values.employmentTerm}
            onChange={handleChange('employmentTerm')}
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

export default EmploymentDetails;
