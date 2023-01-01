import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dash-cont">
        <div className="dashboard-nav">
          <div className="sign-div">
            <Link to="/signup">Register</Link>
            <Link to="/login">Login</Link>
          </div>
        </div>
        <div className="dashboard-body">
          <div className="dashboard-requirements">
            <div className="requirements-header">
              <h3>BASIC REQUIREMENTS FOR A LOAN REQUEST</h3>
            </div>
            <div className="requirements-body">
              <ul>
                <li>
                  <p>A user must be member of the society/organisation.</p>
                </li>
                <li>
                  <p>
                    Members can only be accepted by registering formally into
                    the society/organisation, to register click{" "}
                    <Link to="/signup">HERE</Link>.
                  </p>
                </li>
                <li>
                  <p>
                    Loans can only be granted to a user who has been a member of
                    the society/prganisation for more than 3 months.
                  </p>
                </li>
                <li>
                  <p>
                    Loans are only granted if requested loanamount is maximum
                    three times the amount of money in a member's account.
                  </p>
                </li>
              </ul>
            </div>
            <div className="apply">
              <Link to="/loan">APPLY FOR A LOAN</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
