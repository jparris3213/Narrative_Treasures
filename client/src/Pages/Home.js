import React, { useState } from "react";
import { Link } from "react-router-dom"; //used to link the user back to the homepage or their profile upon logging in
import { useMutation } from "@apollo/client";
import { ADD_PROFILE } from "../utils/mutation";
import { LOGIN } from "../utils/mutation";

import Auth from "../utils/auth";

const Home = () => {
  //setting up how the form should look beforehand
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [addProfile, { error, data }] = useMutation(ADD_PROFILE);

  //this will update the form based on input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  //submit form
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(formState);

    try {
      const { data } = await addProfile({
        variables: { ...formState },
      });

      Auth.login(data.addProfile.token);
    } catch (error) {
      console.error(error);
    }
  };

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
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
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
