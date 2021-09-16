import styled from 'styled-components';
import { Link as ReachRouterLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: auto;
  align-content: start;
  background-color: #000000;
`;

export const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  width: 4rem;
  height: 4rem;
  padding-left: 1.2rem;
`;

export const TitleLink = styled(ReachRouterLink)`
  color: #a7d129;
  flex: 1 0 auto;
  margin: 0;
  font-size: 4rem;
  padding: 0;
  font-family: 'Euphoria Script', cursive;

  &:hover {
    color: #a3f7bf;
  }
`;

export const Column = styled.div`
  align-content: flex-end;
  max-width: 30vw;
  margin: auto 1rem;
`;

export const ButtonLink = styled(ReachRouterLink)`
  background-color: #a7d129;
  border-radius: 1rem;
  width: 1rem;
`;

export const ButtonToggle = styled.button`
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  margin: 0 0 12px;
  padding: 16px;
  border: 0;
  cursor: pointer;

  &.light {
    background-color: #a7d129;
    color: gray;
  }

  &.dark {
    background-color: gray;
    color: #a7d129;
  }
`;
