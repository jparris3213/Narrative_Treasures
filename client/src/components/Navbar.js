//import React from "react";
import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  //const [isOpen, setOpen] = useState(false);
  return (
    <header className="bd-header py-3 d-flex align-items-stretch border-bottom border-dark">
      <div className="container-fluid d-flex align-items-center">
        <h1 className="d-flex align-items-center fs-4 text-white mb-0">
          Narrative Treasures
        </h1>
        <nav
          className="navbar navbar-expand-sm navbar-dark"
          aria-label="Third navbar example"
        >
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarsExample03"
              aria-controls="navbarsExample03"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExample03">
              <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    activeclassname="is-active"
                    to="/Home"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    activeclassname="is-active"
                    to="/Inventory"
                  >
                    Inventory
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    activeclassname="is-active"
                    to="/Market"
                  >
                    Market
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    activeclassname="is-active"
                    to="/profile"
                  >
                    Profile
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <img
          className="bg-light rounded-circle"
          src="https://www.freeiconspng.com/thumbs/dragon-png/dragon-png-20.png"
          alt=""
          width="75"
          height="75"
        />
      </div>
    </header>
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
