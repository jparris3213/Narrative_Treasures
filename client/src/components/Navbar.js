//import React from "react";
import React from "react";
import { Link } from "react-router-dom";
import { Navigate, useParams } from "react-router-dom";
import { QUERY_GET_USER, QUERY_ME } from "../utils/queries";
import Auth from "../utils/auth";
import { useQuery, useSubscription } from "@apollo/client";

const Navigation = () => {
  //const [isOpen, setOpen] = useState(false);

  const { profileId } = useParams();

  
  const {loading, data} = useQuery(
    profileId ? QUERY_GET_USER : QUERY_ME,
    {
      variables: { profileId: profileId},
    }
  )

  const profile = data?.me || data?.profile || {};

  if( Auth.loggedIn() && Auth.getProfile().data._id === profileId ) {
    return < Navigate to = "/me" />;
  }

  if( loading ) {
    return(
      <div>Loading...</div>
    );
  }

  if( !profile?.name) {
    return(
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
                      to="/signup"
                    >
                      Signup
                    </Link>
                  </li>
                  <li className="nav-item">
                  </li>
                  <li className="nav-item">

                      <img
                        className="logo"
                        src="/icons/dragon-png-20.png"
                        alt=""
                        width="40"
                        height="40"
                      />
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      activeclassname="is-active"
                      to="/home"
                    >
                      Sign In
                    </Link>
                  
                  </li>
                  <li className="nav-item">
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    )
  }


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
                      className="logo"
                      src={require("../images/new-nt-site-logo-2.png")}
                      alt=""
                      width="200"
                      height="125"
                    />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    activeclassname="is-active"
                    to={`/profile/${profile._id}`}
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
