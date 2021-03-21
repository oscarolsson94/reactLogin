import React, { useState } from 'react';
import axios from 'axios';

const ResetPassword = () => {

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    handleSubmit = () => {
        e.preventDefault();

        const data = {
            token: props.match.params.id,        //this will go to the Route component in app.js and grab the id
            password,           
        };

        if (password === confirmPassword) {
            axios.post("reset", data).then(
                res => {
                    console.log(res);
                }
            ).catch(
                err => {
                    console.log(err);
                }
            );
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Reset Password</h3>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Password" required
                onChange={(e) => setPassword(e.target.value)}/>
            </div>

            <div className="form-group">
                <label>Confirm Password</label>
                <input type="password" className="form-control" placeholder="Confirm Password" required
                onChange={(e) => setConfirmPassword(e.target.value)}/>
            </div>

            <button className="btn btn-primary btn-block">Submit</button>

        </form>
    );
}

export default ResetPassword;
