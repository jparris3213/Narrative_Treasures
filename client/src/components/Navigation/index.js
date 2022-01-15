import React from "react";
// import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <a
            role="button"
            className={`navbar-burger burger ${isOpen && "is-active"}`}
            aria-label="menu"
            aria-expanded="false"
            onClick={() => setOpen(!isOpen)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className={`navbar-menu ${isOpen && "is-active"}`}>
          <div className="navbar-start">
            <Link
              className="navbar-item"
              activeClassName="is-active"
              to="/Home"
            >
              Home
            </Link>

            <Link
              className="navbar-item"
              activeClassName="is-active"
              to="/UserProfile"
            >
              Account
            </Link>

            <Link
              className="navbar-item"
              activeClassName="is-active"
              to="/Inventory"
            >
              Inventory
            </Link>

            <Link
              className="navbar-item"
              activeClassName="is-active"
              to="/Market"
            >
              Market
            </Link>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-white">Log in</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
// function Navigation() {
//   return (

//     // second try
//     // <NavLink
//     //   className="navbar-item"
//     //   activeClassName="is-active"
//     //   to="/client/src/Pages/Inventory.js"
//     //   exact
//     // >
//     //   Inventory
//     // </NavLink>

// // first try
//     // <nav>
//     //   <ul>
//     //     <li className="nav-item"><Link to="/inventory">Inventory</Link></li>
//     //     <li><Link to="/market">Market</Link></li>
//     //     <li><Link to="/profile">User</Link></li>
//     //     <li>Create Shop</li>
//     //     <li><Link to="/inventory">Contact</Link></li>
//     //   </ul>
//     // </nav>
//   );
// }

export default Navigation;

// for create shop: option to bring in D&D API information
