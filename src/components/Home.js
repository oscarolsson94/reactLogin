import axios from 'axios'
import React, { useEffect } from 'react'

const Home = () => {

    useEffect(() => {
        axios.get('user') //hit user route /validate-token
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
