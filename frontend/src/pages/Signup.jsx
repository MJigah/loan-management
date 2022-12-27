import React, { useState } from "react";

const Signup = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_no, setPhoneNo] = useState("");
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
            <h1>Register</h1>
          </div>
          <form className="input-form" onSubmit={submitForm}>
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
                  id="phone_no"
                  type="text"
                  name="phone_no"
                  placeholder="Phone Number"
                  onChange={(e) => setPhoneNo(e.target.value)}
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
