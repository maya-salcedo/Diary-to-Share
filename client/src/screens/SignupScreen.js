import React from 'react';

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
      </form>
    </div>
  );
};

export default SignupScreen;
