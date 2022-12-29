import React, { useState } from "react";

const PersonalDetails = ({ nextStep, handleChange, values }) => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [membershipNumber, setMembershipNumber] = useState("");
  const [homeAddress, setHomeAddress] = useState("");
  const [homeNumber, setHomeNumber] = useState("");
  const [workNumber, setWorkNumber] = useState("");

  return (
    <>
      <div className="input-group">
        <div className="input-form">
          <input
            type="text"
            placeholder="Full Name"
            name="full_name"
            id="full_name"
            onClick={(e) => setFullname(e.target.value)}
          />
        </div>
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
            name="homeNumber"
            id="homeNumber"
            placeholder="Home Number"
            value={values.homeNumber}
            onClick={(e) => setHomeNumber(e.target.value)}
          />
        </div>
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
      <div className="submit-loan-form">
        <button type="submit" disabled="disabled">PREVIOUS</button>
        <button type="submit" onClick={nextStep} >NEXT</button>
      </div>
    </>
  );
};

export default PersonalDetails;
