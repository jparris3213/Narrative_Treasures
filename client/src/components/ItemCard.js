import React, { useState } from "react";
import IconSwitch from "./Icon_Switch";

function Card(props) {
  const { item, inflationValue } = props;
  const discStyle = { fontSize: "8px" };

  const [isOpen, setIsOpen] = useState(false);

  function flipCard(event) {
    setIsOpen(!isOpen);
  }

  const {
    name,
    equipment_category: { name: categoryName },
    cost: { quantity, unit },
    weapon_range,
    damage: {
      damage_dice,
      damage_type: { name: damageName },
    },
    range: { normal, long },
    armor_category: armorCategory,
    armor_class: { base, dex_bonus: dexBonus },
    weight,
    str_minimum: strMinimun,
    stealth_disadvantage: stealthDisadvantage,
    desc,
    tool_category: toolCategory,
    vehicle_category: vehicleCategory,
    speed: { quantity: speedQuantity, unit: speedUnit },
    capacity,
  } = item;

  let baseGpCost = 0;
  if (unit === "gp") {
    baseGpCost = quantity;
  } else if (unit === "sp") {
    baseGpCost = quantity * 0.1;
  } else if (unit === "cp") {
    baseGpCost = quantity * 0.01;
  }

  let rarity = "";

  if (baseGpCost < 10) rarity = "common";
  else if (baseGpCost < 500) rarity = "uncommon";
  else if (baseGpCost < 2500) rarity = "rare";
  else rarity = "artifact";

  let finalCost = baseGpCost * inflationValue;

  let displayCost = [];
  displayCost[0] = Math.floor(finalCost);
  displayCost[1] = Math.floor((finalCost - Math.floor(finalCost)) * 10);
  displayCost[2] = Math.floor(
    ((finalCost - displayCost[0]) * 10 - displayCost[1]) * 10
  );

  return (
    <div className="container" style={{ margin: "0px", padding: "0px" }}>
      <div
        className={isOpen ? "element-card open" : "element-card"}
        onClick={flipCard}
        style={{ margin: "0px", padding: "0px" }}
      >
        <div className={`front-facing front-facing-${rarity}`}>
          <h1 className="abr">
            <IconSwitch item={item} key={item.index} />
            {name}
          </h1>

          <p className="title">{categoryName}</p>

          {quantity !== 0 && (
            <span className="atomic-number">
              {displayCost[0] ? <p>{displayCost[0]} GP</p> : <></>}
              {displayCost[1] ? <p>{displayCost[1]} SP</p> : <></>}
              {displayCost[2] ? <p>{displayCost[2]} CP</p> : <></>}
            </span>
          )}
        </div>
        {categoryName === "Weapon" && (
          <div className={`back-facing ${rarity}`}>
            <div
              className="table-responsive"
              style={{ fontSize: "12px", overflow: "hidden", padding: "0px" }}
            >
              <table className="table">
                <thead>
                  <tr>
                    <th>Range</th>
                    <th>Dmg</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{weapon_range}</td>
                    <td>{damage_dice}</td>
                  </tr>
                </tbody>
              </table>
              <table className="table">
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Weight</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{damageName}</td>
                    <td>{weight} lbs</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              <a
                className="btn"
                href="This will add to inventory"
                target="_blank"
                style={{ fontSize: "12px" }}
              >
                Add to inventory
              </a>
            </p>
          </div>
        )}
        {categoryName === "Armor" && (
          <div className={`back-facing ${rarity}`}>
            <div
              className="table-responsive"
              style={{ fontSize: "12px", overflow: "hidden", padding: "0px" }}
            >
              <table className="table">
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>AC</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{armorCategory}</td>
                    <td>{base}</td>
                  </tr>
                </tbody>
              </table>
              <table className="table">
                <thead>
                  <tr>
                    <th>Weight</th>
                    <th>Min Str</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{weight} lbs</td>
                    <td>{strMinimun}</td>
                  </tr>
                </tbody>
              </table>

              <table className="table">
                <thead>
                  <tr>
                    <th>Properties</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      {dexBonus && <p>Dex Bonus</p>}
                      {stealthDisadvantage && <p>Stealth Disadvantage</p>}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              <a
                className="btn"
                href="This will add to inventory"
                target="_blank"
                style={{ fontSize: "12px" }}
              >
                Add to inventory
              </a>
            </p>
          </div>
        )}
        {categoryName === "Adventuring Gear" && (
          <div className={`back-facing ${rarity}`}>
            <div
              className="table-responsive"
              style={{ fontSize: "15px", overflow: "hidden", padding: "0px" }}
            >
              <table className="table">
                <thead>
                  <tr>
                    <th>Weight</th>
                    <th>Style</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{weight} lbs</td>
                    <td style={discStyle}>{desc}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              <a
                className="btn"
                href="This will add to inventory"
                target="_blank"
                style={{ fontSize: "12px" }}
              >
                Add to inventory
              </a>
            </p>
          </div>
        )}
        {categoryName === "Tools" && (
          <div className={`back-facing ${rarity}`}>
            <div
              className="table-responsive"
              style={{ fontSize: "15px", overflow: "hidden", padding: "0px" }}
            >
              <table className="table">
                <thead>
                  <tr>
                    <th>Weight</th>
                    <th>Type</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{weight} lbs</td>
                    <td>{toolCategory}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              <a
                className="btn"
                href="This will add to inventory"
                target="_blank"
                style={{ fontSize: "12px" }}
              >
                Add to inventory
              </a>
            </p>
          </div>
        )}
        {categoryName === "Mounts and Vehicles" &&
          vehicleCategory === "Mounts and Other Animals" && (
            <div className={`back-facing ${rarity}`}>
              <div
                className="table-responsive"
                style={{ fontSize: "15px", overflow: "hidden", padding: "0px" }}
              >
                <table className="table">
                  <thead>
                    <tr>
                      <th>Speed</th>
                      <th>Capacity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        {speedQuantity}
                        {speedUnit}
                      </td>
                      <td>{capacity}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>{vehicleCategory}</p>
              <p>
                <a
                  className="btn"
                  href="This will add to inventory"
                  target="_blank"
                >
                  Add to inventory
                </a>
              </p>
            </div>
          )}
        {categoryName === "Mounts and Vehicles" &&
          vehicleCategory === "Tack, Harness, and Drawn Vehicles" && (
            <div className={`back-facing ${rarity}`}>
              <p>{vehicleCategory}</p>
              <p>Weight: {weight}</p>
              <p style={discStyle}>{desc}</p>
              <p>
                <a
                  className="btn"
                  href="This will add to inventory"
                  target="_blank"
                >
                  Add to inventory
                </a>
              </p>
            </div>
          )}
        {categoryName === "Mounts and Vehicles" &&
          vehicleCategory === "Waterborne Vehicles" && (
            <div className={`back-facing ${rarity}`}>
              <p>{vehicleCategory}</p>
              <p>
                Speed: {speedQuantity}
                {speedUnit}
              </p>
              <p style={discStyle}>{desc}</p>
              <p>
                <a
                  className="btn"
                  href="This will add to inventory"
                  target="_blank"
                >
                  Add to inventory
                </a>
              </p>
            </div>
          )}
      </div>
    </div>
  );
}

export default Card;
