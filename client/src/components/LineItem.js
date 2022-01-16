import React from "react";

function Item(props) {
  const { equipment, magicItems, sort } = props;

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
      properties: { name: propertyName },
    } = equipment;

    let gpCost = 0;
    if (unit === "gp") {
      gpCost = quantity;
    } else if (unit === "sp") {
      gpCost = quantity * 0.1;
    } else if (unit === "cp") {
      gpCost = quantity * 0.01;
    }

    let rarity = "";
    if (gpCost < 10)rarity = "Common";
    else if (gpCost < 500)rarity = "Uncommon";
    else if (gpCost < 1000)rarity = "Rare";
    else rarity = "Artifact";

    //Randomization function for 'market pricing' --needs moved to seperate .js eventually
    const markup = (Math.random() * (50 - 1) + 1)/100;

    let marketprice = 0;

    if (rarity === "artifact") {
        marketprice = quantity * markup
    } else if (rarity === "rare") {
        marketprice = quantity * (markup / 10)
    } else if (rarity === "uncommon") {
        marketprice = quantity * (markup + 1);
    } else marketprice = quantity;


    if (Math.floor(Math.random() * (100 - 1) + 1) < 50) {
        marketprice = Math.floor(quantity * (markup));
    } else marketprice = Math.floor(quantity / (markup));

    let ferengi = "grey"
     
    if (marketprice - quantity < 0) {
         ferengi = "red"
    } else {
        ferengi = "green"
    }
//--------------------------------------------------------------------------------------------------------
    
    return (

        <tr>
            
            <td>{name}</td> {/* Item Name*/}
            <td>5</td>{/* Quantity on Hand (Needs to pull from Inventory DB*/}
            <td>{weapon_range} | {rarity} | {damageName} |  </td>{/* Range*/}
            <td>{damage_dice}</td>{/* Damage Dice */}
            <td>{quantity} {unit}</td>{/* Base Price */}
            <td style={{color: ferengi}}>{marketprice} {unit}</td>{/* Current Market Price*/}
            <td>{ marketprice - quantity} {unit}</td>

        </tr>
      );
    };
  
  
  export default Item;
  