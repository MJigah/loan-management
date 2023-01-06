import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register, reset } from "../feature/auth/auth.slice";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [home_no, setHomeNo] = useState("");
  const [dob, setDOB] = useState("");
  const [work_no, setWorkNo] = useState("");
  const [postal_code, setPostalCode] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth)

  const submitForm = (e) => {
    e.preventDefault();
    if(password !== confirmPassword){
      toast.error('Passwords don\'t match')
    } else {
      const userData = {
        firstname,
        lastname,
        email,
        home_no,
        dob,
        work_no,
        postal_code,
        address,
        password
      }
      dispatch(register(userData));
    }
  };

  useEffect(() => {
    if(user){
      navigate('/')
    }

    if(isError && message){
      toast.error(message)
    }

    if(isSuccess && message){
      toast.success(message)
      navigate('/')
    }

    dispatch(reset());
  }, [isSuccess, message, isError, dispatch, navigate, user])


  return (
    <div className="signup-container">
      <div className="container">
        <div className="signup-form">
          <div className="signup-title">
            <h1>REGISTER</h1>
          </div>
          <form className="input-signup-form" onSubmit={submitForm}>
            <div className="input-div">
              <div>
                <input
                  id="first_name"
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div>
                <input
                  id="last_name"
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="input-div">
              <div>
                <input
                  id="address"
                  type="text"
                  name="address"
                  placeholder="Contact Address"
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="input-div">
              <div>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <input
                  id="postal_code"
                  type="text"
                  name="postal_code"
                  placeholder="Postal Code"
                  onChange={(e) => setPostalCode(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="input-div">
              <div>
                <label htmlFor="dob">Date of Birth(must be 18yrs or over)</label>
                <input
                  id="dob"
                  type="date"
                  name="dob"
                  placeholder="Date of Birth"
                  onChange={(e) => setDOB(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="input-div">
              <div>
                <input
                  id="home_no"
                  type="text"
                  name="home_no"
                  placeholder="Home Number"
                  onChange={(e) => setHomeNo(e.target.value)}
                  required
                />
              </div>
              <div>
                <input
                  id="work_no"
                  type="text"
                  name="work_no"
                  placeholder="Work Number"
                  onChange={(e) => setWorkNo(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="input-div">
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
              <div>
                <input
                  id="confirmPassword"
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="submit-div">
              <button className="submit-input" type="submit">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
