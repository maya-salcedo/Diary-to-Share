import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components';

export function HeaderContainer() {
  return (
    <Header>
      <Header.Logo
        to="/creatediary"
        src="/images/logo.png"
        alt="Diary-to-Share"
      />
      <Header.TitleLink>Diary-to-Share</Header.TitleLink>
      <Header.Column>
        <form>
          <input type="search" placeholder="Search keywords"></input>
        </form>
      </Header.Column>
      <Header.Column>
        <Header.ButtonLink to="/signin">Sign In</Header.ButtonLink>
        <Header.ButtonLink to="/signup">Sign Up</Header.ButtonLink>
      </Header.Column>
    </Header>
  );
}
