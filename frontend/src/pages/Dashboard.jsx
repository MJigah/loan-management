import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDetails, logout, reset } from "../feature/auth/auth.slice";

const Dashboard = () => {
  const dispatch = useDispatch();

  const { user, userToken, isLoading, isError, isSuccess, message } =
    useSelector((state) => state.auth);

    const signout = () => {
      console.log('Signout')
      dispatch(logout)
    }
  useEffect(() => {
    dispatch(getDetails());

    dispatch(reset());
  }, [dispatch]);
  return (
    <div className="dashboard-container">
      <div className="dash-cont">
        <div className="dashboard-nav">
          {user && userToken ? (
            <div className="sign-div">
              <Link to="/">{user.firstName}</Link>
              <button onClick={signout}>Signout</button>
            </div>
          ) : (
            <div className="sign-div">
              <Link to="/signup">Register</Link>
              <Link to="/login">Login</Link>
            </div>
          )}
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
              <Link to="/loan">APPLY</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
