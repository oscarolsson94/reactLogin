import axios from 'axios'
import React, { useEffect } from 'react'

const Home = () => {

    state = {}; //use the global state

    useEffect(() => {

        axios.get('user') //hit user route /users or /validate-token, needs a route that returns user data based on token
            .then(res => {
                setState({ // use the global method
                    user: res.data
                });
            },
                err => {
                    console.log(err);
                })
    });

    

        if (state.user) { //global state
            return (
                <h2>Hi {state.user.first_name}</h2> //print something personal from user object if user is not empty
            )
        }
        return (
        <div>
            <h2>You are not logged in</h2>
        </div>
        )
    
}

export default Home;
