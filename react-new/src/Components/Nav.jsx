import React from 'react'
import {NavLink} from "react-router-dom"
const Nav = () => {
  return (
    <div>
      <NavLink to='/'>home</NavLink>
      <NavLink to='/'>About</NavLink>
      <NavLink to='/'>Contact</NavLink>
    </div>
  )
}

export default Nav
