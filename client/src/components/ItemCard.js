import React, { useState } from "react";

function Card(props) {
  const { item, sort } = props;
  const discStyle = { fontSize: "10px" };

  const [isOpen, setIsOpen] = useState(false);

  function flipCard(event) {
    setIsOpen(!isOpen);
  }

  const {
    index,
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
  } = item;

  let gpCost = 0;
  if (unit === "gp") {
    gpCost = quantity;
  } else if (unit === "sp") {
    gpCost = quantity * 0.1;
  } else if (unit === "cp") {
    gpCost = quantity * 0.01;
  }

  let rarity = "";
  if (!gpCost) rarity = "artifact";
  else if (gpCost < 10) rarity = "common";
  else if (gpCost < 500) rarity = "uncommon";
  else rarity = "rare";

  return (
    <div className="container">
      <div
        className={isOpen ? "element-card open" : "element-card"}
        onClick={flipCard}
      >
        <div className={`front-facing front-facing-${rarity}`}>
          <h1 className="abr">{name}</h1>
          <p className="title">{categoryName}</p>
          {quantity && (
            <span className="atomic-number">
              {quantity}
              {unit}
            </span>
          )}
        </div>
        {categoryName === "Weapon" && (
          <div className={`back-facing ${rarity}`}>
            <p>Range: {weapon_range}</p>
            {weapon_range === "Ranged" && <p>normal: {normal}</p>}
            {weapon_range === "Ranged" && <p>long: {long}</p>}
            <p>Damage: {damage_dice}</p>
            <p>Damage type: {damageName}</p>
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
        {categoryName === "Armor" && (
          <div className={`back-facing ${rarity}`}>
            <p>Armor Category: {armorCategory}</p>
            <p>Base Armor Class: {base}</p>
            {strMinimun === true && <p>Str Minimum: {strMinimun}</p>}
            <p>Weight: {weight}</p>
            <p>Properties:</p>
            {dexBonus && <p>Dex Bonus</p>}
            {stealthDisadvantage && <p>Stealth Disadvantage</p>}
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
        {categoryName === "Adventuring Gear" && (
          <div className={`back-facing ${rarity}`}>
            <p>weight: {weight}</p>
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
