import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDetails, logout, reset } from "../feature/auth/auth.slice";
import credit from '../asset/img/credit-card-2.png';
import profile from '../asset/img/Frame-36.png';
import cash from '../asset/img/Frame-35.png';
const Dashboard = () => {
  const dispatch = useDispatch();

  const { user, userToken, isLoading, isError, isSuccess, message } =
    useSelector((state) => state.auth);

    const signout = () => {
      // console.log('Signout')
      dispatch(logout())
    }
  useEffect(() => {
    if(userToken){
      dispatch(getDetails());
    }

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
            <div className="sign-div-container">
              <div className="card-div">
                <p>LOGO</p>
              </div>
              <div className="sign-div">
                <Link to="/signup">Register</Link>
                <Link to="/login">Login</Link>
              </div>
            </div>
          )}
        </div>
        <div className="dashboard-header">
          <h2>Welcome to <span id="header-span">KoboExpress</span></h2>
        </div>
        <div className="dashboard-body">
          <div className="dashboard-entry">
            <div className="entry-header">
              <h2>Quick Cash Anytime, Anywhere</h2>
            </div>
            <div className="entry-body">
              <div className="entry-info">
                <img src={cash} alt="profile" />
                <div>
                  <h4>Create a Profile</h4>
                  <p>Register an account and let's get to know you.</p>
                </div>
              </div>
              <div className="entry-info">
                <img src={credit} alt="credit card" />
                <div>
                  <h4>Apply for a Loan</h4>
                  <p>Apply an we will instantly get your credit score and let machine learning decide if you qualify.</p>
                </div>
              </div>
              <div className="entry-info">
                <img src={profile} alt="cash" />
                <div>
                  <h4>Get Cash</h4>
                  <p>If you qualify, your cash will be disbursed within minutes to your bank account.</p>
                </div>
              </div>
            </div>
          </div>
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
          </div>
            <div className="apply">
              <Link to="/loan">GET STARTED</Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
