import React from "react";
import "font-awesome/css/font-awesome.min.css";
import { Link } from "react-router-dom";

function Congratulations() {
  return (
    <div className="congrat-container">
      <div className="container">
        <div className="loan-form">
          <div className="loan-title-div">
            <h1>APPLY FOR A NEW LOAN</h1>
          </div>
          <div className="congrat-body">
            <div className="congrat-body-top">
              <h3>Congratulations</h3>
              <i className="fa fa-check fa-5x"></i>
            </div>
            <p className="congrat-body-desc">
              Your application has been received and your loan is being
              processed
            </p>
            <div className="congrat-body-link">
              <Link to="/dashboard">Back To Dashboard</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Congratulations;
