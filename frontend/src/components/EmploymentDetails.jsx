import React, { useState } from "react";

const EmploymentDetails = ({ prevStep, nextStep, values, handleChange }) => {
  const [employerNumber, setEmployerNumber] = useState("");
  const [deparment, setDeparment] = useState("");
  const [employerAddress, setEmployerAddress] = useState("");
  const [employmentTerm, setEmploymentTerm] = useState("");

  return (
    <>
      <div className="input-group">
        <div className="input-form">
          <input
            type="text"
            placeholder="Employer's Number"
            name="employerNumber"
            id="employerNumber"
            onClick={(e) => setEmployerNumber(e.target.value)}
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
            onClick={(e) => setDeparment(e.target.value)}
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
            onClick={(e) => setEmployerAddress(e.target.value)}
          />
        </div>
      </div>
      <div className="input-group">
        <div className="input-form">
          <input
            type="text"
            placeholder="Employment Term"
            name="employmenyTerm"
            id="employmenyTerm"
            onClick={(e) => setEmploymentTerm(e.target.value)}
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

export default EmploymentDetails;
