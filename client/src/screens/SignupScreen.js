import React from 'react';
import { Link } from 'react-router-dom';

const SignupScreen = () => {
  return (
    <div>
      <form>
        <div>
          <h1>Create an Account</h1>
        </div>
        <div>
          <label>Name:</label>
          <input type="text" placeholder="Enter name" required></input>
        </div>
        <div>
          <label>Email:</label>
          <input type="text" placeholder="Enter email" required></input>
        </div>
        <div>
          <label>Password:</label>
          <input type="text" placeholder="Enter password" required></input>
        </div>
        <div>
          <label>Confirm Password:</label>
          <input type="text" placeholder="Confirm password" required></input>
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
        <div>
          Already a registed user? <Link to="/signin">Log In</Link>
        </div>
      </form>
    </div>
  );
};

export default SignupScreen;
