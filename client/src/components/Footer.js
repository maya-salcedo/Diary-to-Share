import React from 'react';

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer>
      <h5>Diary-to-Share</h5>
      <h6>Maya Salcedo © {year}</h6>
    </footer>
  );
};

export default Footer;
