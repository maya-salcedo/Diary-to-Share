import React from 'react';
import { Link as ReachRouterLink } from 'react-router-dom';
import {
  ButtonLink,
  ButtonToggle,
  Column,
  Container,
  Logo,
  Row,
  TitleLink,
} from './styles/header';

export default function Header({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReachRouterLink to={to}>
      <Logo {...restProps} />
    </ReachRouterLink>
  );
};

Header.TitleLink = function HeaderTitleLink({ children, ...restProps }) {
  return <TitleLink {...restProps}>{children}</TitleLink>;
};

Header.Row = function HeaderRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

Header.Column = function HeaderColumn({ children, ...restProps }) {
  return <Column {...restProps}>{children}</Column>;
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

Header.ButtonToggle = function HeaderButtonToggle({ children, ...restProps }) {
  return <ButtonToggle {...restProps}>{children}</ButtonToggle>;
};
