import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom'
import { login, reset } from "../feature/auth/auth.slice";

const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password
    }
    dispatch(login(userData));
  };

  useEffect(() => {
    if(user){
      navigate('/');
    }
    if(isError){
      toast.error(message)
    }
    
    if(isSuccess && message){
      toast.success(message)
      navigate('/')
    }

    dispatch(reset());
  }, [isSuccess, message, isError, dispatch, navigate, user])

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
