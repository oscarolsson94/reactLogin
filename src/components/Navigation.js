import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {

    if (user) { //if user is not an empty object, display this
        
    }

    return (

        <nav className="navbar navbar-expand navbar-light fixed-top" >
              <div className="container">
                  <Link to="/" className="navbar-brand" >Home</Link>
                  <div className="collapse navbar-collapse">
                      
                  </div>
                </div>
        </nav>
    )
}

export default Navigation
