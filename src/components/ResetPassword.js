import React, { useState } from 'react';

const ResetPassword = () => {

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    handleSubmit = () => {
        e.preventDefault();
        
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
                <input type="password" className="form-control" placeholder="Password" required
                onChange={(e) => setConfirmPassword(e.target.value)}/>
            </div>

            <button className="btn btn-primary btn-block">Submit</button>

        </form>
    );
}

export default ResetPassword;
