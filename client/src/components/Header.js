import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>Diary-to-Share</h1>
      <div>
        <form>
          <label htmlFor="username">Username:</label>
          <input type="text" placeholder="Username" required></input>
          <label htmlFor="password">Password:</label>
          <input type="text" placeholder="Password" required></input>
          <button type="submit">Signin</button>
        </form>
        <h5>Not registered?</h5>
        <button>Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
