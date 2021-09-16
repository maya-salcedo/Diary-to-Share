import styled from 'styled-components';
import { Link as ReachRouterLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: space-around;
  align-items: auto;
  align-content: start;
  background-color: #242333;
  color: #ffffff;
  padding-bottom: 2rem;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: auto;
  align-content: start;
`;

export const Logo = styled.img`
  width: 4rem;
  height: 4rem;
  padding: 1.2rem;
`;

export const TitleLink = styled(ReachRouterLink)`
  color: #ffffff;
  text-decoration: none;
  flex: 1 0 auto;
  margin: 0;
  font-size: 4rem;
  padding: 0;
  font-family: 'Euphoria Script', cursive;

  &:hover {
    color: #01b0d3;
  }
`;

export const Column = styled.div``;

export const ButtonLink = styled(ReachRouterLink)`
  background-color: #01b0d3;
  color: #242333;
  opacity: 0.8;
  border-radius: 0.2rem;
  text-decoration: none;
  padding: 0.5rem 0.8rem;
  margin: 0.2rem;
  font-size: 1rem;

  &:hover {
    opacity: 1;
  }
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
