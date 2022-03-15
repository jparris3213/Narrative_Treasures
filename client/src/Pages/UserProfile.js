import React, { useEffect, useState } from "react";
import Item from "../components/LineItem";
import { Navigate, useParams } from "react-router-dom";
import {
  MAGIC_ITEMS,
  ALL_EQUEPMENT,
  MONSTERS_QUERY,
  MONSTER_QUERY,
} from "../utils/api";
import { QUERY_GET_USER, QUERY_ME } from "../utils/queries";

import Auth from "../utils/auth";
import { useQuery, useSubscription } from "@apollo/client";

const UserProfile = () => {
  const { profileId } = useParams();

  const [equipments, setEquipments] = useState([]);
  useEffect(() => {
    ALL_EQUEPMENT().then(({ data }) => {
      setEquipments(data.equipments);
    });
  }, []);

  //for getting the data of the user logged in
  const { loading, data, error } = useQuery(
    profileId ? QUERY_GET_USER : QUERY_ME,
    {
      variables: { profileId: profileId },
    }
  );

  //contains the info we need from the user
  const profile = data?.me || data?.profile || {};

  //for redirecting the user to their profile
  if (Auth.loggedIn() && Auth.getProfile().data._id === profileId) {
    return <Navigate to="/me" />;
  }

  //if page is loading shows loading
  if (loading) {
    return <div>Loading...</div>;
  }

  //checks if user is logged in
  if (!profile?.name) {
    return <h1>Log in Sucka!</h1>;
  }

  return (
    <div>
      <div>
        <h1>Your User Profile </h1>
      </div>
      <div> Current Gold On Hand: </div>
      <div>
        <ul>
          <li>Name: {profile.name}</li>
        </ul>
      </div>
      <div>
        <div className="container-fluid">
          <div className="row">
            <h2>Characters</h2>
            <div className="table-responsive">
              <table className="table table-striped table-sm">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Gold</th>
                  </tr>
                </thead>
                <tbody>
                  {profile.characters.length
                    ? profile.characters.map((character) => {
                        return (
                          <tr key={character.name}>
                            <td>{character.name}</td>
                            <td>{character.gold}</td>
                          </tr>
                        );
                      })
                    : "ehh no inventory!"}
                </tbody>
              </table>
            </div>
            <h2>Worlds</h2>
            <div className="table-responsive">
              <table className="table table-striped table-sm">
                <thead>
                  <tr>
                    <th scope="col">World</th>
                    <th scope="col">DM</th>
                  </tr>
                </thead>
                <tbody>
                  {profile.games.length
                    ? profile.games.map((game) => {
                        return (
                          <tr key={game._id}>
                            <td>{game.name}</td>
                            <td>{game.name}</td>
                          </tr>
                        );
                      })
                    : "ehh no inventory!"}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
