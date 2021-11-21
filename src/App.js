import './App.css';
import { Contacts } from './Contacts';
import { Navbar } from './Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Login } from './Login';
import { Signup } from './Signup'
import { Home } from './Home';
import {useState, useEffect} from 'react'
import {auth} from './firebase'

function App() {
  const [user, setUser] = useState(null)
  useEffect(()=>{
      auth.onAuthStateChanged( (user) => {
        if(user) {
          setUser(user)
        } else {setUser(null)}
      })
  },[])

  return (

    <div className="row">
      <div className="col-md-10 offset-md-1">
        <BrowserRouter>
        <Navbar user={user}/>
        
          <Switch>
            <Route exact path='/'>
              <Home user={user}/>
            </Route>
            <Route path='/contacts'>
            <Contacts user={user}/>
            </Route>
            <Route path='/login'>
              <div className="col-md-6 offset-md-1 my-5">
                <Login />
              </div>
            </Route>
            <Route path='/signup'>
              <div className="col-md-6 offset-md-1 my-5">
                <Signup />
              </div>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}


export default App;
