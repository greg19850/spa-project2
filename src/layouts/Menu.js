import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Menu.css"

const nav = [
  { text: 'Start', path: "/", exact: true },
  { text: 'Products', path: "/products" },
  { text: 'Contact', path: "/contact" },
  { text: 'Admin Panel', path: "/admin" },
];

function Menu() {
  const menu = nav.map(element => (
    <li key={element.text}><NavLink exact={element.exact ? element.exact : false} to={element.path}>{element.text}</NavLink></li>
  ));

  return (
    <nav className="main">
      <ul>
        {menu}
      </ul>
    </nav>
  );
}

export default Menu;