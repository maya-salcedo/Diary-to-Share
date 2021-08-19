import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #444444;
`;

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <FooterWrapper>
      <h5>Diary-to-Share</h5>
      <h6>Maya Salcedo © {year}</h6>
    </FooterWrapper>
  );
};

export default Footer;
