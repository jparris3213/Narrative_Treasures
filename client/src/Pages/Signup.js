import React from "react";

const Home = () => {
  return (
    <div className="container text-center" cz-shortcut-listen="true">
      <main className="form-signin d-flex justify-content-center mb-3">
        <form>
          <img
            className="mb-4"
            src="https://www.freeiconspng.com/thumbs/dragon-png/dragon-png-20.png"
            alt=""
            width="250"
            height="200"
          />
          <h1 className="h3 mb-3 fw-normal">Please sign up first!</h1>

          <div className="form-floating">
            <input
              type="name"
              className="form-control"
              id="floatingInput_name"
              placeholder="Cado Underbarrow"
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>

          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput_email"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>

          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg pb-10 text-light" type="submit">
            Sign in
          </button>
        </form>
      </main>
    </div>
  );
};

export default Home;
