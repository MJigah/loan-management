import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getDetails, logout, reset } from "../feature/auth/auth.slice";
import { toast } from "react-toastify";
import credit from "../asset/img/credit-card-2.png";
import menu from "../asset/img/Frame-1.png";
import bell from "../asset/img/Frame-2.png";
const LandingPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, userToken, isLoading, isError, isSuccess, message } =
    useSelector((state) => state.auth);

  const signout = () => {
    dispatch(logout());
  };
  useEffect(() => {
    if(!user && !userToken){
      toast.error('You must sign in first!')
      navigate('/login?redirect=dashboard');
    }

    if (userToken) {
      dispatch(getDetails());
    }

    dispatch(reset());
  }, [dispatch, userToken, user, navigate]);
  return (
    <div className="landing-container">
      <div className="landing-cont">
        <div className="landing-nav">
          <div>
            <Link to="/">
              <img src={menu} alt="menu" />
            </Link>
          </div>
          <div>
          <img src={bell} alt="bell" />
          </div>
        </div>
        <div className="landing-body-top">
          <div className="body-top-1">
            <h1>Hello <strong>{user && user.firstName}</strong>,</h1>
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
          <h2>Quick Links</h2>
          <div className="body-bottom-1">
            <div className="sub-links">
              <div>Loan Breakdown</div>
              <div>Apply for Loan</div>
            </div>
            <div className="sub-links">
              <div>Add Payment Account</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
