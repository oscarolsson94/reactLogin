import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
    
    if(user){ //depending on global state variable render different nav
        return (
            <nav className="navbar navbar-expand navbar-light fixed-top" >
                <div className="container">
                    <Link to="/" className="navbar-brand" >Home</Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to="/" onClick={() => localStorage.clear()} className="nav-link" >Log out</Link>
                             </li> {/* we also need to set state to default, aka empty */}
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
