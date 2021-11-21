import React,{useState, useEffect} from 'react'
import {auth} from './firebase'
import {useHistory, useLocation} from 'react-router-dom'

export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory();
    const handleSubmit = async (e) =>{
        e.preventDefault()
       
        try{
            const result = await auth.signInWithEmailAndPassword(email, password)
            alert(`Welcome back ${result.user.email}`);
             history.push('/')
            } catch (err){
             alert(`error is: ${err}`)
            }
        }
    return (
       <div>
       <p>Please enter your <span id='log'>Login</span> Details</p>
       <form onSubmit={handleSubmit}>
            <div className="form-group input-group col-md-6 mt-3">
          <div className="input-group-prepend ">
            <div className="input-group-text ">
              <i className="fas fa-envelope"></i>
            </div>
          </div>
          <input type="email" className="form-control" placeholder="Email" required onChange={(e)=>setEmail(e.target.value)}/>
        </div>
       
        <div className="form-group input-group col-md-6 mt-3">
          <div className="input-group-prepend ">
            <div className="input-group-text ">
              <i className="fas fa-lock"></i>
            </div>
          </div>
          <input type="password" className="form-control" placeholder="Password" required onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <input type="submit" value="Login" className="btn btn-success bt-block my-3"/>
        </form>
        </div>
    )
}
