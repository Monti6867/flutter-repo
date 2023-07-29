import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainer = styled.div`
  background-color: #5f4eeb;
  color: #fff;
  padding: 20px;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterText = styled.p`
  margin: 0;
`;

const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-left: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterText>
          &copy; {new Date().getFullYear()} My E-Commerce. All rights reserved.
        </FooterText>
        <div>
          <FooterLink to="/">Home</FooterLink>
          <FooterLink to="/about">About us</FooterLink>
          <FooterLink to="/contact">Contact us</FooterLink>
        </div>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
