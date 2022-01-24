import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { ADD_PROFILE } from "../utils/mutation";

import { Navigate, useParams } from "react-router-dom";
import { QUERY_GET_USER, QUERY_ME } from "../utils/queries";

import Auth from "../utils/auth";

const Signup = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
    dungeonMaster: false,
    gold: 0,
  });
  const [addProfile, { error, data }] = useMutation(ADD_PROFILE);

  //update the state based on the form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleDungeonMasterChange = () => {
    setFormState({
      ...formState,
      dungeonMaster: !formState.dungeonMaster,
    });
  };

  //submit form
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const temp = formState;
    temp.gold = parseInt(formState.gold);

    try {
      const { data } = await addProfile({
        variables: { ...temp },
      });

      Auth.login(data.addProfile.token);
    } catch (error) {
      console.error(error);
    }
  };

  const { profileId } = useParams();

  const { loading, data2 } = useQuery(profileId ? QUERY_GET_USER : QUERY_ME, {
    variables: { profileId: profileId },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  const profile = data2?.me || data?.profile || {};

  return (
    <div className="container text-center" cz-shortcut-listen="true">
      <main className="form-signin d-flex justify-content-center mb-3">
        {data ? (
          <p>
            Success! You can now head{" "}
            <Link to={`/profile/${profile._id}`}>to your homepage.</Link>
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
            <h1 className="h3 mb-3 fw-normal">Please sign up first!</h1>

            <div className="form-floating">
              <input
                type="name"
                name="name"
                className="form-control"
                id="floatingInput_name"
                placeholder="Username"
                value={formState.name}
                onChange={handleChange}
              />
              <label htmlFor="floatingInput">User Name</label>
            </div>

            <div className="form-floating">
              <input
                type="email"
                name="email"
                className="form-control"
                id="floatingInput_email"
                placeholder="name@example.com"
                value={formState.email}
                onChange={handleChange}
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>

            <div className="form-floating">
              <input
                type="password"
                name="password"
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
                <input
                  type="checkbox"
                  name="dungeonMaster"
                  checked={formState.dungeonMaster}
                  defaultValue={false}
                  onChange={handleDungeonMasterChange}
                />
                Dungeon Master ?
              </label>
            </div>

            <div className="form-floating">
              <input
                type="number"
                max="1000"
                name="gold"
                className="form-control"
                id="floatingGold"
                placeholder="500"
                value={formState.gold}
                onChange={handleChange}
              />
              <label htmlFor="floatingGold">Starting Gold</label>
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

export default Signup;
