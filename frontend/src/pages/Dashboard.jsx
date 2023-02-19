import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDetails, logout, reset } from "../feature/auth/auth.slice";
import credit from "../asset/img/credit-card-2.png";
import profile from "../asset/img/Frame-36.png";
import cash from "../asset/img/Frame-35.png";
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
        <div className="landing-nav"></div>
        <div className="landing-body-top"></div>
        <div className="landing-body-bottom"></div>
      </div>
    </div>
  );
};

export default LandingPage;
