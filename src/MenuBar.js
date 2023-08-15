import React from 'react';
import logo from './img/logo.svg';
import './css/MenuBar.css';
import './css/Base.css';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function getFullYear() {
  const dt = new Date();
  const currentYear = dt.getFullYear();
  return currentYear;
}

function MenuBar() {
  return (
    <div className='Menubar_wrap'>
      <div className='Menubar_logo_wrap'>
        <img className='Menubar_logo' src={logo} alt='richad-logo' />
      </div>
      <ul className='Menubar_list list-style-none text-right'>
        <li className='Menubar_list_item position-relative'>
          <Link to='/works'>Works</Link>
        </li>
        <li className='Menubar_list_item position-relative'>
          <Link to='/about'>About</Link>
        </li>
        <li className='Menubar_list_item position-relative'>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
      <Footer year={getFullYear()} />
    </div>
  );
}

export default MenuBar;
