import React from 'react'
import { Link } from 'react-router-dom'

export const Home = (props) => {
    return (
        <>
        { props.user ? 
        <>    
        <div className="text-center">
        <h1 >Welcome to Contact List !!</h1>
        <p>We are Happy to have you on the site</p>
        <p>HAPPY BROWSING ;)</p>
        <Link className="nav-link" aria-current="page" to="/contacts">Contact List</Link>
        </div>
        </>
        : 
        <h3 className="text-center mt-5">Please <span id="log">Login </span> or <span id="sign">Signup</span> to Continue</h3>
        }
        </>
    )
}
