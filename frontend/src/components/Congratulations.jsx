import React from "react";
import "font-awesome/css/font-awesome.min.css";
import { Link } from "react-router-dom";

function Congratulations() {
  return (
    <div className="loan-container">
      <div className="container">
        <div className="loan-form">
          <div className="loan-title-div">
            <h1>APPLY FOR A NEW LOAN</h1>
          </div>
          <div>
            <div>
            <h3>Congratulations</h3>
            <i className="fa fa-check"></i>
            </div>
            <p>Your application has been received and your loan is being processed</p>
            <div>
                <Link to="/dashboard">Back To Dashboard</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Congratulations;
