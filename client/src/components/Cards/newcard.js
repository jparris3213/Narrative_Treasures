import React, { useState } from "react";

function Card(props) {
  const { equipments, magicItems, sort } = props;
  console.log(equipments);
  const [isOpen, setIsOpen] = useState(false);
  function flipCard() {
    setIsOpen(!isOpen);
  }

  return equipments.map((equipment) => {
    let gpCost = 0;
    if (equipment.cost.unit == "gp") {
      gpCost = equipment.cost.quantity;
    } else if (equipment.cost.unit == "sp") {
      gpCost = equipment.cost.quantity * 0.1;
    } else if (equipment.cost.unit == "cp") {
      gpCost = equipment.cost.quantity * 0.01;
    }

    let rarity = "";
    switch (gpCost) {
      case gpCost <= 10:
        rarity = "common";
        break;
      case gpCost <= 500:
        rarity = "uncommon";
        break;
      case gpCost <= 5000:
        rarity = "rare";
        break;
      default:
        rarity = "artifact";
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
      properties: { name: propertyName },
    } = equipment;

    return (
      <div
        className={isOpen ? "element-card open" : "element-card"}
        onClick={flipCard}
      >
        <div class={`front-facing front-facing-${rarity}`}>
          <h1 class="abr">{name}</h1>
          <p class="title">{categoryName}</p>
          <span class="atomic-number">
            {quantity}
            {unit}
          </span>
        </div>
        <div className={`back-facing ${rarity}`}>
          <p>Range: {weapon_range}</p>
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
      </div>
    );
  });
}

export default Card;
