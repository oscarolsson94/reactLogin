import React from 'react'

const Forgot = () => {

    handleSubmit = () => {
        e.preventDefault();
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
