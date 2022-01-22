import React from "react";

function Card(props) {
  const { monster } = props;
  const {
    name,
    size,
    type,
    subtype,
    alignment,
    armor_class: armorClass,
    hit_points: hitPoints,
    hit_dice: hitDice,
    speed: { walk, swim, burrow, fly, climb, hover },
    strength,
    dexterity,
    constitution,
    intelligence,
    wisdom,
    charisma,
    proficiencies,
    damage_vulnerabilities: damageVulnerabilities,
    damage_resistances,
    damage_immunities,
    condition_immunities,
    senses: {
      darkvision,
      passive_perception,
      blindsight,
      truesight,
      tremorsense,
    },
    languages,
    challenge_rating: challengeRating,
    special_abilities,
    actions,
    legendary_actions,
  } = monster;

  return (
    <div className="d-flex flex-column align-items-center">
      <h1>{name}</h1>
      <p>Challenge Rating: {challengeRating}</p>
      <p>Size: {size}</p>
      <p>Type: {type}</p>
      <p>Subtypes: {subtype}</p>
      <p>Alignment: {alignment}</p>
      <p>Armor Class: {armorClass}</p>
      <p>Hit Points: {hitPoints}</p>
      <p>Hit Dice: {hitDice}</p>
      <p>Speed:</p>
      {walk ? <p>Walk: {walk}</p> : <></>}
      {swim ? <p>Swim: {swim}</p> : <></>}
      {burrow ? <p>Burrow: {burrow}</p> : <></>}
      {fly ? <p>Fly: {fly}</p> : <></>}
      {climb ? <p>Climb: {climb}</p> : <></>}
      {hover ? <p>Hover: {hover}</p> : <></>}
      {strength ? <p>Strength: {strength}</p> : <></>}
      {dexterity ? <p>Dexterity: {dexterity}</p> : <></>}
      {constitution ? <p>Constitution: {constitution}</p> : <></>}
      {intelligence ? <p>Intelligence: {intelligence}</p> : <></>}
      {wisdom ? <p>Wisdom: {wisdom}</p> : <></>}
      {charisma ? <p>Charisma: {charisma}</p> : <></>}
      {proficiencies.map(({ proficiency, value }) => {
        return (
          <p>
            {proficiency.name} Value: {value}
          </p>
        );
      })}
    </div>
  );
}
export default Card;
