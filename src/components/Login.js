import React, { useState } from 'react'
import axios from 'axios';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            email: email,
            password: password,
        };

        axios.post("http://localhost:3000/login", data) //returns a token
            .then(res => {
                localStorage.setItem('token', res.token); //save token in localStorage
            }
            ).catch(error => {
                console.log(error);
            })
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

        </form>
    );
};

export default Login;