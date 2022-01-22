import React, { useEffect, useState } from "react";
import Card from "../components/ItemCard";
import Loading from "../components/Loading";
import MarketForm from "../components/MarketForm";
import { ALL_EQUEPMENT } from "../utils/api";
import filterItems from "../utils/filterMarket";

const Market = () => {
  const [equipments, setEquipments] = useState([]);
  const [displayItems, setDisplayItems] = useState([]);
  const [sort, setSort] = useState({});

  useEffect(() => {
    ALL_EQUEPMENT().then(({ data }) => {
      setEquipments(data.equipments);
    });
  }, []);

  useEffect(() => {
    setDisplayItems(filterItems(equipments, sort));
  }, [equipments, sort]);

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
          {displayItems.length ? (
            displayItems.map((item) => {
              return <Card item={item} key={item.index} />;
            })
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </div>
  );
};

export default Market;
