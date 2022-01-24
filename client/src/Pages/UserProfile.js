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
  const { loading, data } = useQuery(profileId ? QUERY_GET_USER : QUERY_ME, {
    variables: { profileId: profileId },
  });

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

  console.log(profile);
  return (
    <div>
      <div>
        <h1>Your User Profile </h1>
      </div>
      <div> Current Gold On Hand: </div>
      <div>
        <ul>
          <li>Name: {profile.name}</li>
          <li>Current Gold: {profile.gold}</li>
          <li>
            Are you a Dungeon Master?{" "}
            <b>
              {profile.dungeonMaster
                ? "Well yeah! Hello Dungeon Master!"
                : "ehh no, Not a dungeon master"}
            </b>{" "}
          </li>
        </ul>
      </div>
      <div>
        <div className="container-fluid">
          <div className="row">
            <h2>Current Inventory</h2>
            <div className="table-responsive">
              <table className="table table-striped table-sm">
                <thead>
                  <tr>
                    <th scope="col">Item</th>
                    <th scope="col">Qty</th>
                    <th scope="col">Description</th>
                    <th scope="col">Dice</th>
                    <th scope="col">Cost</th>
                    <th scope="col">Market Price</th>
                    <th scope="col">Profit/Loss</th>
                  </tr>
                </thead>
                <tbody>
                  {" "}
                  <b>
                    {profile.inventory.length > 0
                      ? profile.inventory.map((item) => {
                          return <p>{item}</p>;
                        })
                      : "ehh no inventory!"}
                  </b>
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
