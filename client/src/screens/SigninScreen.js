import React from 'react';
import { Link } from 'react-router-dom';

const SigninScreen = () => {
  return (
    <div>
      <form>
        <div>
          <h1>Sign In</h1>
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
          <button type="submit">Log In</button>
        </div>
        <div>
          New to Diary-to-Share? <Link to="/signup">Sign Up</Link>
        </div>
      </form>
    </div>
  );
};

export default SigninScreen;
