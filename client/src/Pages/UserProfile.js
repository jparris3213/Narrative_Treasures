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

  const userGold = profile.gold;

  let displayGold = [];
  if (userGold) {
    displayGold[0] = Math.floor(userGold);
    displayGold[1] = Math.floor((userGold - Math.floor(userGold)) * 10);
    displayGold[2] = Math.floor(
      ((userGold - displayGold[0]) * 10 - displayGold[1]) * 10
    );
  }

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
          <li>
            Current Gold: {displayGold[0] ? <>{displayGold[0]} GP</> : <></>}
            {displayGold[1] ? <>{displayGold[1]}SP</> : <></>}
            {displayGold[2] ? <>{displayGold[2]} CP</> : <></>}
          </li>
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
                    <th scope="col">Equipment Category</th>
                    <th scope="col">Cost</th>
                    <th scope="col">Dice</th>
                    <th scope="col">Weapon Range</th>
                    <th scope="col">Properties</th>
                  </tr>
                </thead>
                <tbody>
                  {" "}
                  {profile.inventory.length
                    ? profile.inventory.map((item) => {
                        //return <p key={item.index}>{item}</p>; //for testing does work!
                        const equipment = JSON.parse(item);
                        console.log(equipment);
                        return (
                          <Item equipment={equipment} key={equipment.index} />
                        );
                      })
                    : "ehh no inventory!"}
                </tbody>
                {/* <tbody>
                  {equipments.length &&
                    equipments.map((equipment) => {
                      return (
                        <Item equipment={equipment} key={equipment.index} />
                      );
                    })}
                </tbody> */}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
