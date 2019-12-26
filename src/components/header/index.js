import React from 'react'

import logo from '../../../public/logo_transparent.png'

import './styles.scss'

export default () => (
  <nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo">
        <img className="logo" src={logo} alt="Mars Rover"/>
      </a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="//github.com/jaredpalmer/razzle" target="_blank">Razzle</a></li>
        <li><a href="//recharts.org" target="_blank">recharts</a></li>
        <li><a href="//materializecss.com/navbar.html" target="_blank">MaterializeCss</a></li>
      </ul>
    </div>
  </nav>
)