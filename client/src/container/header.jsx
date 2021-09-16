import React from 'react';

import { ThemeContext } from '../context/theme';
import { Header } from '../components';
import { useContext } from 'react';

export function HeaderContainer() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <Header>
      <Header.Row>
        <Header.Logo
          to="/creatediary"
          src="/images/logo-light-background.png"
          alt="Diary-to-Share"
        />
        <Header.TitleLink>Diary-to-Share</Header.TitleLink>
        {/* <Header.Column>
          <Header.ButtonToggle onClick={toggleTheme} className={`${theme}`}>
            Switch Theme
          </Header.ButtonToggle>
        </Header.Column> */}
        <Header.Column>
          <div class="switch-holder">
            <div class="switch-label">
              <span>Dark mode</span>
            </div>
            <div class="switch-toggle">
              <input type="checkbox" id="bluetooth" />
              <label for="bluetooth"></label>
            </div>
          </div>
        </Header.Column>
      </Header.Row>
      <Header.Row>
        <Header.Column>
          <Header.ButtonLink to="/signin">Sign In</Header.ButtonLink>
          <Header.ButtonLink to="/signup">Sign Up</Header.ButtonLink>
        </Header.Column>
      </Header.Row>
    </Header>
  );
}
