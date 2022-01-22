import React, { useState } from "react";

const category_paths = [
    "/icons/swords.png",
    "/icons/armor.png",
    "/icons/backpack.png",
    "/icons/construction.png",
    "/icons/construction.png"
];

function IconSwitch(props) {
  const { item } = props;
  const [isOpen, setIsOpen] = useState(false);

  function flipCard(event) {
    setIsOpen(!isOpen);
  }

  const {
    name,
    equipment_category: { name: categoryName },
  } = item;

  return (
    <div className="container">
      {categoryName === "Weapon" && (
        <div className="title">
          <img
            className=""
            src="/icons/swords.png"
            alt="weapon_icon"
            width="60"
            height="60"
          />
        </div>
      )}
      {categoryName === "Armor" && (
        <div className="title">
          <img
            className=""
            src="/icons/armor.png"
            alt="weapon_icon"
            width="60"
            height="60"
          />
        </div>
      )}
      {categoryName === "Adventuring Gear" && (
        <div className="title">
          <img
            className=""
            src="/icons/backpack.png"
            alt="weapon_icon"
            width="60"
            height="60"
          />
        </div>
      )}
      {categoryName === "Tools" && (
        <div className="title">
          <img
            className=""
            src="/icons/construction.png"
            alt="weapon_icon"
            width="60"
            height="60"
          />
        </div>
      )}
      {categoryName === "Mounts and Vehicles" && (
        <div className="title">
          <img
            className=""
            src="/icons/horses.png"
            alt="weapon_icon"
            width="60"
            height="60"
          />
        </div>
      )}

    </div>
  );
}

export default IconSwitch;
