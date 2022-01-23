import React, { useEffect, useState } from "react";
import Item from "../components/LineItem";
import {
  MAGIC_ITEMS,
  ALL_EQUEPMENT,
  MONSTERS_QUERY,
  MONSTER_QUERY,
} from "../utils/api";

const UserProfile = () => {
  const [equipments, setEquipments] = useState([]);
  useEffect(() => {
    ALL_EQUEPMENT().then(({ data }) => {
      setEquipments(data.equipments);
    });
  }, []);

  return (
    <div>
      <div>
        <h1>Your User Profile </h1>
      </div>
      <div> Current Gold On Hand: 124 </div>
      <div>
        <ul>
          <li>Name</li>
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
