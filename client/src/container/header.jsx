import React from 'react';

import { ThemeContext } from '../context/theme';
import { Header } from '../components';
import { useContext } from 'react';

export function HeaderContainer() {
  const { theme, toggleTheme } = useContext(ThemeContext);
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
      <Header.Column>
        <Header.ButtonToggle onClick={toggleTheme} className={`${theme}`}>
          Switch Theme
        </Header.ButtonToggle>
      </Header.Column>
    </Header>
  );
}
