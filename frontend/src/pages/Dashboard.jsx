import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDetails, logout, reset } from "../feature/auth/auth.slice";
import credit from "../asset/img/credit-card-2.png";
import menu from "../asset/img/Frame-1.png";
import bell from "../asset/img/Frame-2.png";
const LandingPage = () => {
  const dispatch = useDispatch();

  const { user, userToken, isLoading, isError, isSuccess, message } =
    useSelector((state) => state.auth);

  const signout = () => {
    dispatch(logout());
  };
  useEffect(() => {
    if (userToken) {
      dispatch(getDetails());
    }

    dispatch(reset());
  }, [dispatch, userToken]);
  return (
    <div className="landing-container">
      <div className="landing-cont">
        <div className="landing-nav">
          <div>
          <img src={menu} alt="menu" />
          </div>
          <div>
          <img src={bell} alt="bell" />
          </div>
        </div>
        <div className="landing-body-top">
          <div className="body-top-1">
            <h1>Hello <strong>Isaiah</strong>,</h1>
            <p>You have no current loans</p>
          </div>
          <div className="body-top-2">
            <div>
              <p>Balance</p>
              <p>NGN 0.00</p>
            </div>
            <div>
              <p>Monthly Payment</p>
              <p>NGN 0.00</p>
            </div>
          </div>
        </div>
        <div className="landing-body-bottom">
          <h1>Quick Links</h1>
          <div className="body-bottom-1">
            <div>
              <div>Loan Breakdown</div>
              <div>Apply for Loan</div>
            </div>
            <div>
              <div>Add Payment Account</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
