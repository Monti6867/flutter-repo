import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const NavbarContainer = styled.div`
  background-color: #5f4eeb;
  color: #fff;
  padding: 18px;
  display: flex;
  align-items: center;
`;

const Logo = styled.h1`
  margin: 0;
  flex: 2; /* Takes the remaining space in the middle */
  text-align: center;
`;

const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex: 5;
`;

<button
     class="navbar-toggler"
     type="button"
     data-bs-toggle="collapse"
     data-bs-target="#navbarSupportedContent"
     aria-controls="navbarSupportedContent"
     aria-expanded="false"
     aria-label="Toggle navigation"
>
  <span class="navbar-toggler-icon"></span>
</button>
const SearchInput = styled.input`
  padding: 10px 40px 10px 20px; /* Adjust padding to make space for the icon on the right */
  border: none;
  border-radius: 25px;
  width: 60%; /* Make the search input fill the available width */
  background-color: #fff; /* Set the background color of the input */
`;

const SearchIcon = styled.span`
  position: absolute;
  right: 250px; /* Adjust the position of the icon */
  pointer-events: none; /* Ensure the icon doesn't interfere with input events */
`;

const NavLink = styled.div`
  margin: 0 30px;
  cursor: pointer;
  font-size: 18px;
`;

const MoreOptions = styled.div`
  position: absolute;
  top: 60px;
  right: 10px;
  background-color: #333;
  color: #fff;
  display: ${({ show }) => (show ? 'block' : 'none')};
  padding: 20px;
  border-radius: 8px;
`;

const OptionContainer = styled.div`
  padding: 5px 0;
`;

const Option = styled.div`
  padding: 5px 10px;
  cursor: pointer;
  &:hover {
    background-color: #555;
  }
`;

const Navbar = () => {
  const [showMoreOptions, setShowMoreOptions] = useState(false);

  const handleMoreClick = () => {
    setShowMoreOptions(!showMoreOptions);
  };

  return (
    <NavbarContainer>
      <Logo>My E-Commerce</Logo>
      <SearchContainer>
        <SearchInput type="text" placeholder="Search for products and more" />
        <SearchIcon>
          <FontAwesomeIcon icon={faSearch}  />
        </SearchIcon>
      </SearchContainer>
      <NavLink onClick={handleMoreClick}>More</NavLink>
      <NavLink>
        <FontAwesomeIcon icon={faShoppingCart} /> Cart
      </NavLink>
      <div className='buttons'>
        <a href="" className='btn btn-outline-dark'>
          <i className='fa fa-sign-in me-1'></i>logout</a>
      </div>

    </NavbarContainer>
  );
};

export default Navbar;
