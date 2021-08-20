import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #616f39;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding: 0.5rem 0 0.5rem;
  > h3 {
    font-family: 'Euphoria Script', cursive;
    margin: 0;
    padding: 0 0.5rem;
  }
  > p {
    margin: 0;
    padding: 0 0.5rem;
  }
`;

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <FooterWrapper>
      <h3>Diary-to-Share</h3>
      <p>by Maya Salcedo © {year}</p>
    </FooterWrapper>
  );
};

export default Footer;
