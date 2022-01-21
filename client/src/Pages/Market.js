import React, { useEffect, useState } from "react";
import Card from "../components/ItemCard";
import MarketForm from "../components/MarketForm";
import { ALL_EQUEPMENT, MONSTERS_QUERY, MONSTER_QUERY } from "../utils/api";

const Market = () => {
  const [equipments, setEquipments] = useState([]);
  const [sort, setSort] = useState({});

  useEffect(() => {
    ALL_EQUEPMENT().then(({ data }) => {
      setEquipments(data.equipments);
    });
  }, []);

  function updateSort(newSort) {
    setSort(newSort);
  }

  return (
    <div>
      <MarketForm updateSort={updateSort} />
      <div className="container text-center">
        <h1> Welcome to Sword-Mart</h1>
        <p>Remember: Shop Smart...Shop S-Mart</p>
      </div>

      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-6 g-3">
          {equipments.length !== 0 &&
            equipments.map((item) => {
              return <Card item={item} key={item.index} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Market;
