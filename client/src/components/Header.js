import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: #171717;
  color: #ededed;
`;

const Header = () => {
  return (
    <HeaderWrapper>
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
    </HeaderWrapper>
  );
};

export default Header;
