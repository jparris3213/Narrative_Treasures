import { Link } from "react-router-dom";

const Splash = () => {
  return (
    <div>
      <div className="container-fluid d-flex justify-content-center">
        <img
          className="mb-4"
          src={require("../images/new-nt-site-logo-2.png")}
          alt=""
          width="850rem"
          height="500rem"
        />
      </div>
      <div className="container-fluid d-flex justify-content-center">
        <div className="card splash-text text-center">
          <div className="card-body">
            <h5 className="card-title text-light">New adventurer?</h5>
            <Link className="btn btn-lg btn-2 text-light" to="/signup">
              Sign up
            </Link>
          </div>
        </div>
        <div className="card splash-text text-center">
          <div className="card-body">
            <h5 className="card-title text-light">Not your first journey?</h5>
            <Link className="btn btn-lg btn-2 text-light" to="/login">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Splash;
