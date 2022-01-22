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

    //Filter Information
    <div>
      <div className="container text-center">
        <h1>Marketplace</h1>
        <p3>Remember: Shop Smart...Shop S-Mart</p3>
      </div>
      <div clasName="row">
      <div className="">

      <div className="col" style={{float:"left", margin: "0"}}><MarketForm updateSort={updateSort} /></div>
      

      <div className="col" style={{margin: "0", padding: "0"}}>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 g-3" style={{margin: "0", padding: "0"}}>
          {displayItems.length ? (
            displayItems.map((item) => {
              return <Card item={item} key={item.index} />;
            })
          ) : (
            <Loading />
          )}
        </div>
      </div></div></div>
    </div>
  );
};

export default Market;
