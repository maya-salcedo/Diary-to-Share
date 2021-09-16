import React from 'react';
import { Footer } from '../components';

const year = new Date().getFullYear();

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Title>Diary-to-Share</Footer.Title>
      <Footer.TextSmall>by Maya Salcedo © {year}</Footer.TextSmall>
    </Footer>
  );
}
