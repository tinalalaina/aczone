import React, { useState } from 'react';
import axios from 'axios';

import './Auth.css'
function Auth() {
  const [username, setUsername] = 
useState('');
const [password, setPassword] = 
useState('');
const handleSubmit = async (e) => {
e.preventDefault();
try {
const response = await
axios.post('http://localhost/reactcrudphp/aczone/authentification/login.php', {
username,
password,
});
if (response.data.success) {
// Store authentication state
localStorage.setItem('isAuthenticated', true);
// Redirect to dashboard
window.location.href = '/pages';
} else {
alert(response.data.message);
}
} catch (error) {
console.error(error);
alert("erreur de connéxion")
}
};


  return (
    <div className='body'>
        <div className="Auth-form-container" >
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) =>
              setUsername(e.target.value)}
              placeholder="Username"
              className="form-control mt-1"
              
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) =>
              setPassword(e.target.value)}
              placeholder="Password"
              className="form-control mt-1"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="/Ajouteruser">password?</a>
          </p>
        </div>
      </form>
    </div>
    </div>
  )
}

export default Auth