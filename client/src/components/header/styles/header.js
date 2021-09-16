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
  width: 2.5rem;
  height: 2.5rem;
  padding: 2.2rem 1rem 2.2rem 2.2rem;
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

export const Toggle = styled.div`
  display: flex;
  padding: 10px 20px;
  border-radius: 10px;
  margin: 1rem;
  justify-content: space-between;
  align-items: center;
`;

export const ToggleLabel = styled.div`
  width: 4rem;
  font-size: 0.7rem;
  margin-top: 0.5rem;
`;

export const ToggleSwitch = styled.div`
  height: 2rem;

  > input {
    position: absolute;
    opacity: 0;
    z-index: -2;
  }
  > label {
    position: relative;
    display: inline-block;
    width: 100px;
    height: 40px;
    border-radius: 20px;
    margin: 0;
    cursor: pointer;
    box-shadow: inset -8px -8px 15px rgba(255, 255, 255, 0.6),
      inset 10px 10px 10px rgba(0, 0, 0, 0.25);
  }
  > label::before {
    position: absolute;
    content: 'OFF';
    font-size: 13px;
    text-align: center;
    line-height: 25px;
    top: 8px;
    left: 8px;
    width: 45px;
    height: 25px;
    border-radius: 20px;
    background-color: #d1dad3;
    box-shadow: -3px -3px 5px rgba(255, 255, 255, 0.5),
      3px 3px 5px rgba(0, 0, 0, 0.25);
    transition: 0.3s ease-in-out;
  }

  > input:checked + label::before {
    left: 50%;
    content: 'ON';
    color: #fff;
    background-color: #00b33c;
    box-shadow: -3px -3px 5px rgba(255, 255, 255, 0.5), 3px 3px 5px #00b33c;
  }
`;
