import React from 'react';

import { ThemeContext } from '../context/theme';
import { Header } from '../components';
import { useContext } from 'react';

export function HeaderContainer() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <Header className={`${theme}`}>
      <Header.Row>
        <Header.Logo
          to="/creatediary"
          src={`/images/logo-${theme}-background.png`}
          alt="Diary-to-Share"
        />
        <Header.TitleLink className={`${theme}`}>
          Diary-to-Share
        </Header.TitleLink>
        <Header.Column>
          <Header.Toggle>
            <Header.ToggleLabel>
              <span>Dark mode</span>
            </Header.ToggleLabel>
            <Header.ToggleSwitch>
              <input
                type="checkbox"
                id="darkmodetoggle"
                onClick={toggleTheme}
              />
              <label for="darkmodetoggle"></label>
            </Header.ToggleSwitch>
          </Header.Toggle>
        </Header.Column>
      </Header.Row>
      <Header.Row>
        <Header.Column>
          <Header.ButtonLink className={`${theme}`} to="/signin">
            Sign In
          </Header.ButtonLink>
          <Header.ButtonLink className={`${theme}`} to="/signup">
            Sign Up
          </Header.ButtonLink>
        </Header.Column>
      </Header.Row>
    </Header>
  );
}
