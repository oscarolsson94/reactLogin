import axios from 'axios';
import React, { useState } from 'react';

const Forgot = () => {

    const [email, setEmail] = useState("");

    handleSubmit = () => {
        e.preventDefault();

        const data = {
            email
        };

        axios.post("forgot", data) //post to /forgot   (send email api route)
            .then(
                res => {
                    console.log(res);
                }
            ).catch(
                err => {
                    console.log(err);
                }
            );
        

    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Forgot password</h3>

            <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="Email" required
                onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <button className="btn btn-primary btn-block">Submit</button>

        </form>
    );
}

export default Forgot;
