import React from 'react'
import { Link } from 'react-router-dom'
import {auth} from './firebase'
import {useHistory, useLocation} from 'react-router-dom'

export const Navbar = ({user}) => {
    const history = useHistory();
    return (
        <>
        <div className="nav py-3 mb-4">
            <ul className="nav nav-tabs">
                
                <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/">Home</Link>
                </li>
                { user ?
                  <li>
                  <button className="btn btn-danger" onClick={()=>{
                       auth.signOut() 
                       history.push('/login')
                       }}>Logout</button>
                </li> :
                <>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/signup">Signup</Link>
                </li>
                </>
                 }

               

                <li className="nav-item">
                <Link className="nav-link disabled" to="#">About</Link>
                </li>
            </ul>
        </div>

       
        </>
    )
}
