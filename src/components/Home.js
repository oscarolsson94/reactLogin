import axios from 'axios'
import React, { useEffect } from 'react'

const Home = () => {

    state = {}; //use the global state

    useEffect(() => {

    const config = {
        headers: {
            Authorization: "Bearer " + localStorage.getItem('token');
        }
    };

    axios.get('user', config) //hit user route /users or /validate-token, needs a route that returns user data based on token
            .then(res => {
                setState({ // use the global method
                    user: res.data
                });
            },
                err => {
                console.log(err);
            })
    })

    

        if (state.user) { //global state
            return (
                
            )
        }
    
        <div>
            <h2>You are not logged in</h2>
        </div>
    
}

export default Home;
