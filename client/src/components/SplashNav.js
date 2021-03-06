// for create shop: option to bring in D&D API information
//import React from "react";
import React from "react";
import { Link } from "react-router-dom";

const SplashNav = () => {
  //const [isOpen, setOpen] = useState(false);
  return (
    <header className="bd-header py-3 d-flex align-items-stretch">
      <div className="container-fluid d-flex justify-content-center">
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
              aria-label="Toggle SplashNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarsExample03">
              <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    activeclassname="is-active"
                    to="/signup"
                  >
                    Signup
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
                    to="/Home"
                  >
                    <img
                      className="mb-4"
                      src="https://www.freeiconspng.com/thumbs/dragon-png/dragon-png-20.png"
                      alt=""
                      width="250"
                      height="200"
                    />
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
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    activeclassname="is-active"
                    to="/monsters"
                  >
                    Monsters
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default SplashNav;

// for create shop: option to bring in D&D API information
