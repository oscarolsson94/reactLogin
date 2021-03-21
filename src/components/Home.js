import axios from 'axios'
import React, { useEffect } from 'react'

const Home = () => {

    const config = {
        headers: {
            Authorization: "Bearer " + localStorage.getItem('token');
        }
    };

    useEffect(() => {
        axios.get('user', config) //hit user route /users or /validate-token, needs a route that returns user data based on token
            .then(res => {
            console.log(res);
            },
                err => {
                console.log(err);
            })
    })

    return (
        <div>
            <h2>You are not logged in</h2>
        </div>
    )
}

export default Home;
