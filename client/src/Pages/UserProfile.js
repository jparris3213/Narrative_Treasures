import React, { useEffect, useState } from "react";
import Item from "../components/LineItem";
import { Redirect, useParams} from "react-router-domg"
import {
  MAGIC_ITEMS,
  ALL_EQUEPMENT,
  MONSTERS_QUERY,
  MONSTER_QUERY,
} from "../utils/api";
import { QUERY_GET_USER, QUERY_ME} from "../utils/queries";

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

  const [user, setUser] = useState([]);
  useEffect(() => {
    QUERY_GET_USER().then(({data}) => {
      setUser(data.user);
    });
  }, []);

  const {loading, data} = useQuery(
    profileId ? QUERY_GET_USER : QUERY_ME,
    {
      variables: { profileId: profileId},
    }
  )

  return (
    <div>
      <div>
        <h1>Your User Profile </h1>
      </div>
      <div> Current Gold On Hand: 124 </div>
      <div>
        <ul>
          {user.length &&
          user.map((user) => {
            return (
              <li>${user.name}</li>
            )
          })}
          <li>Name:</li>
          <li>Current Gold: </li>
          <li>Sold</li>
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
                  {equipments.length &&
                    equipments.map((equipment) => {
                      return (
                        <Item equipment={equipment} key={equipment.index} />
                      );
                    })}
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
