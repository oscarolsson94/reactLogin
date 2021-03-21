import React, { useState } from 'react'
import axios from 'axios';
import { Redirect } from 'react-router';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            email: email,
            password: password,
        };

        axios.post("login", data) //returns a token //localhost.../login
            .then(res => {
                localStorage.setItem('token', res.data.token); //save token in localStorage
                setLoggedIn(true);
            }
            ).catch(error => {
                console.log(error);
            })
    }

    if (loggedIn) {
        return <Redirect to={"/"} />;
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Log in</h3>

            <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="Email" required
                onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Password" required
                onChange={(e) => setPassword(e.target.value)}/>
            </div>

            <button className="btn btn-primary btn-block">Log in</button>
            <p className="forgot-password text-right">
                <Link to={"/forgot"}>Forgot password?</Link>
            </p>

        </form>
    );
};

export default Login;