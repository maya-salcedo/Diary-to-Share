import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderWrapper = styled.header`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: auto;
  align-content: start;
  background-color: #000000;
  > a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & img {
    width: 4rem;
    height: 4rem;
    padding-left: 1.2rem;
  }
  & h1 {
    color: #a7d129;
    flex: 1 0 auto;
    margin: 0;
    font-size: 4rem;
    padding: 0;
    font-family: 'Euphoria Script', cursive;
    :hover {
      color: #a3f7bf;
    }
  }
  > div {
    align-content: flex-end;
    max-width: 30vw;
    margin: auto 1rem;
  }
  & button {
    background-color: #a7d129;
    border-radius: 1rem;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Link to="/">
        <img src="/images/logo.png"></img>
      </Link>
      <Link to="/">
        <h1>Diary-to-Share</h1>
      </Link>
      <div>
        <form>
          <input type="search" placeholder="Search keywords"></input>
        </form>
      </div>
      <div>
        <Link to="/signin">
          <button>Sign In</button>
        </Link>

        <Link to="/signup">
          <button>Sign Up</button>
        </Link>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
