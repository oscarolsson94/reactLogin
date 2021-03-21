import axios from 'axios';
import React, { useState } from 'react';


const Register = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmedPassword, setConfirmedPassword] = useState("");
    

    const handleSubmit = (e) => {
        e.preventDefault();
        //nollställa states igen?

        const data = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,
            confirmed_password: confirmedPassword        
        }

            axios.post("register", data) //localhost.../register
                .then(
                    res => {
                        console.log(res);
                    }
                ).catch(
                error => {
                    console.log(error);
                    }
                )
    
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <h3>Sign Up</h3>

            <div className="form-group">
                <label>First Name</label>
                <input type="text" className="form-control" placeholder="First Name" required
                    onChange={(e) => setFirstName(e.target.value)} />
            </div>

            <div className="form-group">
                <label>Last Name</label>
                <input type="text" className="form-control" placeholder="Last Name" required
                onChange={(e) => setLastName(e.target.value)}/>
            </div>

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

            <div className="form-group">
                <label>Confirm Password</label>
                <input type="password" className="form-control" placeholder="Confirm Password" required
                onChange={(e) => setConfirmedPassword(e.target.value)}/>
            </div>

            <button className="btn btn-primary btn-block">Sign Up</button>

        </form>
    );
};

export default Register;