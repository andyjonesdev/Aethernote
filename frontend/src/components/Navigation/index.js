import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import LoginFormModal from '../LoginFormModal';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import '../NotebooksList/NotebookList.css'


function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <div className='navigation'>
      <ul className='home-nav-section'>
        <li>
          <NavLink exact to="/">Home</NavLink>
          {isLoaded && sessionLinks}
        </li>
      </ul>
      <div className='notebook-nav-section'>
        <NavLink exact to="/notebooks">Notebooks</NavLink>
      </div>
    </div>
  );
}

export default Navigation;
