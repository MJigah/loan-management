import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { login, reset } from "../feature/auth/auth.slice";

const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { search } = useLocation();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const redirect = search ? search.split('=')[1] : "" ;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    dispatch(login(userData));
  };

  useEffect(() => {
    if (user) {
      navigate(`/${redirect}`);
    }
    if (isError) {
      toast.error(message);
    }
    
    if (isSuccess && message) {
      toast.success(message);
      navigate(`/${redirect}`);
    }

    dispatch(reset());
  }, [isSuccess, message, isError, dispatch, navigate, user]);

  return (
    <div className="container signin-container">
      <div className="signin-form-container">
        <div className="signin-form">
          <div className="title-div">
            <h1>SIGN IN</h1>
          </div>
          <form className="login-input-form" onSubmit={submitForm}>
            <div className="login-input-div">
              <div>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
          </form>
        </div>
        <div className="submit-div">
          <button className="submit-input" type="submit" onClick={submitForm}>
            Login
          </button>
          <p>Don't have an account? <Link to="/signup">Register</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
