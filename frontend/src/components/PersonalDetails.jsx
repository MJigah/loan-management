import React, { useState } from "react";

const PersonalDetails = ({ step, nextStep, handleChange, values }) => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [membershipNumber, setMembershipNumber] = useState("");
  const [homeAddress, setHomeAddress] = useState("");
  const [homeNumber, setHomeNumber] = useState("");
  const [workNumber, setWorkNumber] = useState("");

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
            value={values.fullname}
            onClick={(e) => setFullname(e.target.value)}
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
            value={values.email}
            onClick={(e) => setEmail(e.target.value)}
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
            value={values.membershipNumber}
            onClick={(e) => setEmail(e.target.value)}
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
            value={values.homeAddress}
            onClick={(e) => setHomeAddress(e.target.value)}
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
            value={values.workNumber}
            onClick={(e) => setWorkNumber(e.target.value)}
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
            value={values.homeNumber}
            onClick={(e) => setHomeNumber(e.target.value)}
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
