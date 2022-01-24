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
    const markup = (1 + Math.random());
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
            
            <td>{name}</td>
            <td>5</td>
            <td>{weapon_range} | {rarity} | {damageName} |  </td>
            <td>{damage_dice}</td>
            <td>{quantity} {unit}</td>
            <td>{marketprice} {unit}</td>
            <td style={{color: ferengi}}>{ marketprice - quantity} {unit}</td>

        </tr>
      );
    };
  
  
  export default Item;
  