import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {

    handleLogout = () => {
        localStorage.clear();
        setUser({}); //on log out, clear localStorage and set the global user object to an empty object
    };
    
    if(user){ //depending on global state variable render different nav
        return (
            <nav className="navbar navbar-expand navbar-light fixed-top" >
                <div className="container">
                    <Link to="/" className="navbar-brand" >Home</Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to="/" onClick={handleLogout} className="nav-link" >Log out</Link>
                             </li> 
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
    else {
        return (
            <nav className="navbar navbar-expand navbar-light fixed-top" >
                <div className="container">
                    <Link to="/" className="navbar-brand" >Home</Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to="/login" className="nav-link" >Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/register" className="nav-link" >Sign up</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navigation
