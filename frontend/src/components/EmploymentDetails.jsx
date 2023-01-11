import React, { useState } from "react";

const EmploymentDetails = ({ step, prevStep, nextStep, values, handleChange }) => {
  const [employerNumber, setEmployerNumber] = useState("");
  const [deparment, setDeparment] = useState("");
  const [employerAddress, setEmployerAddress] = useState("");
  const [employmentTerm, setEmploymentTerm] = useState("");

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
            value={values.employerNumber}
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
            value={values.deparment}
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
            value={values.employerAddress}
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
            value={values.employmentTerm}
            onClick={(e) => setEmploymentTerm(e.target.value)}
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
