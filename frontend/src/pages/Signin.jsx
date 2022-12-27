import React, { useState } from "react";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    console.log("Submit form");
  };

  return (
    <div className="container signin-container">
      <div className="signin-form">
        <div className="title-div">
          <h1>SIGN IN</h1>
        </div>
        <form className="login-input-form" onSubmit={submitForm}>
          <div className="login-input-div">
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="submit-div">
            <button className="submit-input" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
