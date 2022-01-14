import React from "react";
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/inventory">Inventory</Link></li>
        <li><Link to="/market">Market</Link></li>
        <li><Link to="/profile">User</Link></li>
        <li>Create Shop</li>
        <li><Link to="/inventory">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;

// for create shop: option to bring in D&D API information
