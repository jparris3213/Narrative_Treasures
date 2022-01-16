import React, { useEffect, useState } from "react";
import Card from "../components/ItemCard";
import {
  MAGIC_ITEMS,
  ALL_EQUEPMENT,
  MONSTERS_QUERY,
  MONSTER_QUERY,
} from "../utils/api";

const Market = () => {
  const [equipments, setEquipments] = useState([]);
  useEffect(() => {
    ALL_EQUEPMENT().then(({ data }) => {
      setEquipments(data.equipments);
    });
  }, []);

  return (
    <div>
      <div className="container text-center">
        <h1> Welcome to Sword-Mart</h1>
        <p>Remember: Shop Smart...Shop S-Mart</p>
      </div>

      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-6 g-3">
          {equipments.length &&
            equipments.map((equipment) => {
              return <Card equipment={equipment} key={equipment.index} />;
            })}
        </div>
      </div>


    </div>
  );
};

export default Market;
