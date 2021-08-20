import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: auto;
  align-content: start;
  background-color: #616f39;
  color: #000000;
  > h1 {
    flex: 1 0 auto;
    margin: 1rem;
    font-size: 4rem;
    margin: 0;
    padding: 0 1.5rem;
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
      <h1>Diary-to-Share</h1>
      <div>
        <form>
          <input type="search" placeholder="Search keywords"></input>
        </form>
      </div>
      <div>
        <button>Sign In</button> <button>Sign Up</button>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
