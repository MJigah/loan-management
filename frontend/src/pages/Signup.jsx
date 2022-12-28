import React, { useState } from "react";

const Signup = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [home_no, setHomeNo] = useState("");
  const [dob, setDOB] = useState("");
  const [work_no, setWorkNo] = useState("");
  const [postal_code, setPostalCode] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    console.log("Submit form");
  };

  return (
    <div>
      <div className="container">
        <div className="signup-form">
          <div className="signup-title">
            <h1>REGISTER</h1>
          </div>
          <form className="input-signup-form" onSubmit={submitForm}>
            <div className="input-div">
              <div>
                <input
                  id="first_name"
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div>
                <input
                  id="last_name"
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="input-div">
              <div>
                <input
                  id="address"
                  type="text"
                  name="address"
                  placeholder="Contact Address"
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="input-div">
              <div>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <input
                  id="postal_code"
                  type="text"
                  name="postal_code"
                  placeholder="Postal Code"
                  onChange={(e) => setPostalCode(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="input-div">
              <div>
                <label htmlFor="dob">Date of Birth(must be 18yrs or over)</label>
                <input
                  id="dob"
                  type="date"
                  name="dob"
                  placeholder="Date of Birth"
                  onChange={(e) => setDOB(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="input-div">
              <div>
                <input
                  id="home_no"
                  type="text"
                  name="home_no"
                  placeholder="Home Number"
                  onChange={(e) => setHomeNo(e.target.value)}
                  required
                />
              </div>
              <div>
                <input
                  id="work_no"
                  type="text"
                  name="work_no"
                  placeholder="Work Number"
                  onChange={(e) => setWorkNo(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="input-div">
              <div>
                <input
                  id="password"
                  type="paswword"
                  name="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div>
                <input
                  id="confirmPassword"
                  type="paswword"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="submit-div">
              <button className="submit-input" type="submit">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
