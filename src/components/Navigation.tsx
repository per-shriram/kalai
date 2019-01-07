import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

export default class Navigation extends React.Component {
  public render() {
    return (
      <div className="slide-nav-bar">
         <NavLink to='/'> Home </NavLink>
         <NavLink to='/students'> Students </NavLink>
         <NavLink to='/assignments'> Assignments </NavLink>
      </div>);
  }
}