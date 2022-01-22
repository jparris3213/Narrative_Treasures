import React, { useState } from "react";
import { Link } from "react-router-dom"; //used to link the user back to the homepage or their profile upon logging in
import { useMutation } from "@apollo/client";
import { LOGIN } from "../utils/mutation";

import Auth from "../utils/auth";

const Home = () => {
  //setting up our form
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN);

  //used to update form based on input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  //submit form
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState },
      });
      // console.log(data);
      Auth.login(data.login.token);
    } catch (error) {
      console.error(error);
    }

    //clear the form values
    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <div className="container text-center" cz-shortcut-listen="true">
      <main className="form-signin d-flex justify-content-center mb-3">
        {data ? (
          <p>
            Success! You can now head{" "}
            <Link to="/profile">to the profile page.</Link>
          </p>
        ) : (
          <form onSubmit={handleFormSubmit}>
            <img
              className="mb-4"
              src="https://www.freeiconspng.com/thumbs/dragon-png/dragon-png-20.png"
              alt=""
              width="250"
              height="200"
            />
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

            <div className="form-floating">
              <input
                name="email"
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                value={formState.email}
                onChange={handleChange}
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input
                name="password"
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="********"
                value={formState.password}
                onChange={handleChange}
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
        )}

        {error && (
          <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
        )}
      </main>
    </div>
  );
};

export default Home;
