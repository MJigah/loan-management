import React, { useState } from "react";

const PersonalDetails = ({ step, nextStep, handleChange, values }) => {
  return (
    <>
      <div className="counter"><p>PERSONAL INFORMATION</p><p>{step}/5</p></div>
      <div className="input-group">
        <div className="input-form">
          <input
            type="text"
            placeholder="Full Name"
            name="fullname"
            id="fullname"
            defaultValue={values.fullname}
            onChange={handleChange('fullname')}
          />
        </div>
      </div>
      <div className="input-group">
        <div className="input-form">
          <input
            type="text"
            placeholder="Email"
            name="email"
            id="email"
            defaultValue={values.email}
            onChange={handleChange('email')}
          />
        </div>
      </div>
      <div className="input-group">
        <div className="input-form">
          <input
            type="text"
            placeholder="Membership Number"
            name="membershipNumber"
            id="membershipNumber"
            defaultValue={values.membershipNumber}
            onChange={handleChange('membershipNumber')}
          />
        </div>
      </div>
      <div className="input-group">
        <div className="input-form">
          <input
            type="text"
            name="homeAddress"
            id="homeAddress"
            placeholder="Home Address"
            defaultValue={values.homeAddress}
            onChange={handleChange('homeAddress')}
          />
        </div>
      </div>
      <div className="input-group">
        <div className="input-form">
          <input
            type="text"
            name="workNumber"
            id="workNumber"
            placeholder="Work Number"
            defaultValue={values.workNumber}
            onChange={handleChange('workNumber')}
          />
        </div>
      </div>
      <div className="input-group">
        <div className="input-form">
          <input
            type="text"
            name="homeNumber"
            id="homeNumber"
            placeholder="Home Number"
            defaultValue={values.homeNumber}
            onChange={handleChange('homeNumber')}
          />
        </div>
      </div>
      <div className="submit-loan-form">
        <button type="submit" className="prev" disabled="disabled">{""}</button>
        <button type="submit" className="next" onClick={nextStep} >NEXT</button>
      </div>
    </>
  );
};

export default PersonalDetails;
