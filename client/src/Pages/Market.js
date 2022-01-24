import React, { useEffect, useState } from "react";
import Card from "../components/ItemCard";
import Loading from "../components/Loading";
import MarketForm from "../components/MarketForm";
import { ALL_EQUEPMENT } from "../utils/api";
import filterItems from "../utils/filterMarket";

const Market = () => {
  const [equipments, setEquipments] = useState([]);
  const [displayItems, setDisplayItems] = useState([]);
  const [sort, setSort] = useState({
    shopName: "",
    inflationValue: 1,
    minValue: 0,
    maxValue: 0,
    noArmor: false,
    noWeapon: false,
    noAdventuringGear: false,
    noTools: false,
    noMountsVehicles: false,
  });

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
      <div className="row">
        <div className="">
          <div
            className="col p-2"
            style={{ float: "left", margin: "0", width: "20vw" }}
          >
            <MarketForm updateSort={updateSort} />
          </div>

          <div className="col" style={{ margin: "0", padding: "0" }}>
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-md-5 g-3"
              style={{ margin: "0", padding: "0", width: "75vw" }}
            >
              {displayItems.length ? (
                displayItems.map((item) => {
                  return (
                    <Card
                      item={item}
                      key={item.index}
                      inflationValue={sort.inflationValue}
                    />
                  );
                })
              ) : (
                <Loading />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Market;
