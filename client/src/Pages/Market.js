import React, { useEffect, useState } from "react";
import Card from "../components/ItemCard";
import MarketForm from "../components/MarketForm";
import {
  MAGIC_ITEMS,
  ALL_EQUEPMENT,
  MONSTERS_QUERY,
  MONSTER_QUERY,
} from "../utils/api";

const Market = () => {
  const [equipments, setEquipments] = useState([]);
  const [magicItems, setMagicItems] = useState([]);
  const [displayItems, setDisplayItems] = useState([]);
  const [sort, setSort] = useState({});

  useEffect(() => {
    ALL_EQUEPMENT().then(({ data }) => {
      const hold = data.equipments.map((equipment) => ({
        ...equipment,
        basic: true,
      }));
      setEquipments(hold);
      setDisplayItems(...displayItems, ...equipments);
    });
  }, []);

  useEffect(() => {
    MAGIC_ITEMS().then(({ data }) => {
      const hold = data.magicItems.map((magicItem) => ({
        ...magicItem,
        magic: true,
      }));
      setMagicItems(hold);
      setDisplayItems(...displayItems, ...magicItems);
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
          {displayItems.length &&
            displayItems.map((item) => {
              return <Card item={item} key={item.index} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Market;
