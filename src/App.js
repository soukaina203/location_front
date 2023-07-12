import './App.css';
import React from 'react';
import {BrowserRouter as Router ,Link ,Route,Routes} from 'react-router-dom'
import LandingPage from './LandingPage/LandingPage';
import SignUp from './Auth/SignUp';
import SignIn from './Auth/SignIn';
function App() {
  return (
    <div className="App">
    <Router>

      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/signIn' element={<SignIn/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
        
      </Routes>
    </Router>
    </div>
  );
}

export default App;
