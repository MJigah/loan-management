import React, {useState  } from 'react';

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitForm = (e) => {
        e.preventDefault();
        console.log('Submit form')
    }

    return (
        <div className="container">
        <div className="signup-form">
            <h1>Login</h1>
            <form className="login-input-form" onSubmit={submitForm}>
                <div className="login-input-div">
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
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        required 
                        />
                    </div>
                </div>
                <div className="submit-div">
                    <button className="submit-input" type="submit">Login</button>
                </div>
            </form>
        </div>
    </div>
    );
};

export default Signin;