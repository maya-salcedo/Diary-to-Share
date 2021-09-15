import React from 'react';
import { Link as ReachRouterLink } from 'react-router-dom';
import {
  ButtonLink,
  Column,
  Container,
  Link,
  Logo,
  TitleLink,
} from './styles/header';

export default function Header({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Header.Link = function HeaderLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReachRouterLink to={to}>
      <Logo {...restProps} />;
    </ReachRouterLink>
  );
};

Header.TitleLink = function HeaderTitleLink({ children, ...restProps }) {
  return <TitleLink {...restProps}>{children}</TitleLink>;
};

Header.Column = function HeaderColumn({ children, ...restProps }) {
  return <Column {...restProps}>{children}</Column>;
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};
