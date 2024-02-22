import React from 'react';
import './styles/Header.css'
import { GoSearch } from "react-icons/go";
import { AiOutlineUser } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";

import Logo from './LogoComponent';
import MenuIcon from './MenuComponent';
import Searchbar from './Searchbar';

const Header = () => {

  return (
    <div className="header">
      <div className='menu-search-container'>
        <MenuIcon className="icon menu-icon" />
        <GoSearch className="icon search-icon-mobile" />
      </div>
      <div className="logo-container">
        <Logo />
      </div>
      <Searchbar />
      <div className='user-cart-container'>
        <AiOutlineUser className="icon" />
        <FiShoppingCart className="icon" />
      </div>
    </div>
  );
};

export default Header;