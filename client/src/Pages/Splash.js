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
        <p className="splash-text">New adventurer?</p>
        <p className="splash-text">Been here before?</p>
      </div>
      <div className="container-fluid d-flex justify-content-center">
        <Link className="btn btn-lg btn-2 text-light" to="/signup">
          Sign up
        </Link>
        <Link className="btn btn-lg btn-2 text-light" to="/home">
          Log in
        </Link>
      </div>
    </div>
  );
};

export default Splash;
