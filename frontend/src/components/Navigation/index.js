import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import * as sessionActions from '../../store/session';
import { login } from '../../store/session'
import SignupFormModal from '../SignupFormModal'
import LoginFormModal from '../LoginFormModal';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import '../NotebooksList/NotebookList.css'


function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch()
  const history = useHistory();

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push('/')
  };

  let sessionLinks;
  if (sessionUser) {
    //if user, session links is NAME and LOGOUT
    sessionLinks = (
      <div className='session-links'>
        <p className='welcome-text'>Welcome, {sessionUser.username}!</p>
        <button className='logout-button' onClick={logout}>Log Out</button>
      </div>
    )
    // sessionLinks = (
    //   <ProfileButton user={sessionUser} />
    // );
  } else {
    //if no user, session links is log in and sign up
    sessionLinks = (
      <div className='session-links'>
        <LoginFormModal />
        <SignupFormModal />
        <div className='demo-button-nav-section'>
            <button onClick={() => {
              dispatch(login({credential: 'Demo-duck', password: 'password'}))
            }} className='demo-button'>Demo</button>
          </div>
      </div>
    );
  }

  return (
    <ul className='navigation'>
        <li className='home-nav-section'>
          <NavLink exact to="/">
            <img id='logo'src='https://see.fontimg.com/api/renderfont4/8PE0/eyJyIjoiZnMiLCJoIjo0NiwidyI6MTAwMCwiZnMiOjQ2LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/QWV0aGVybm90ZQ/paladins-outline.png'></img>
          </NavLink>
        </li>
        {/* <li className='search-nav-section'>
          <form>
            <input className='search-nav-input' placeholder='Find a note'>
            </input>
          </form>
        </li> */}
        {sessionUser && <li className='notebooks-nav-section'>
          <NavLink id='notebooks-text' exact to="/notebooks">
            <button>My Notebooks</button>
          </NavLink>
        </li>}
        <li className='session-nav-section'>
          <div>{isLoaded && sessionLinks}</div>
        </li>
    </ul>
  );
}

export default Navigation;

//

/*
if session user, session links is name and logout
sessionLinks = (
  <div className='session-links'>
    <p>Welcome, {sessionUser.username}</p>
    <button onClick={logout}>Log Out</button>
  </div>
)
*/
