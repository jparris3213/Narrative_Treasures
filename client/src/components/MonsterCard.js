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
    damage_resistances: damageResistances,
    damage_immunities: damageImmunities,
    condition_immunities: conditionImmunities,
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
          <p key={proficiency.name}>
            {proficiency.name} Value: {value}
          </p>
        );
      })}
      {damageVulnerabilities[0] ? (
        <p>
          Damage Vulnerabilities:
          {damageVulnerabilities.map((type) => {
            return type;
          })}
        </p>
      ) : (
        <></>
      )}
      {damageResistances[0] ? (
        <p>
          Damage Resistances:
          {damageResistances.map((type) => {
            return { type };
          })}
        </p>
      ) : (
        <></>
      )}
      {damageImmunities[0] ? (
        <p>
          Damage Immunities:
          {damageImmunities.map((type) => {
            return type;
          })}
        </p>
      ) : (
        <></>
      )}
      {damageResistances[0] ? (
        <p>
          Damage Resistances:
          {damageResistances.map((type) => {
            return type;
          })}
        </p>
      ) : (
        <></>
      )}
      {conditionImmunities[0] ? (
        <p>
          Condition Immunities:
          {conditionImmunities.map((type) => {
            return type;
          })}
        </p>
      ) : (
        <></>
      )}
      <p>
        Senses: {darkvision ? <>Dark Vistion: {darkvision}</> : <></>}
        {passive_perception ? (
          <>Passive Perception: {passive_perception}</>
        ) : (
          <></>
        )}
        {tremorsense ? <>Tremorsence: {tremorsense}</> : <></>}
        {blindsight ? <>Blind Sight: {blindsight}</> : <></>}
        {truesight ? <>Truesight: {truesight}</> : <></>}
      </p>
      <p>Languages: {languages}</p>
      {special_abilities ? (
        <>
          <p>Special Abilities:</p>
          {special_abilities.map(({ name, desc }) => {
            return (
              <p key={name}>
                {name}: {desc}
              </p>
            );
          })}
        </>
      ) : (
        <></>
      )}
      {actions ? (
        <>
          <p>Actions:</p>
          {actions.map(({ name, desc }) => {
            return (
              <p key={name}>
                {name}: {desc}
              </p>
            );
          })}
        </>
      ) : (
        <></>
      )}
      {legendary_actions ? (
        <>
          <p>Legendary Actions:</p>
          {legendary_actions.map(({ name, desc }) => {
            return (
              <p key={name}>
                {name}: {desc}
              </p>
            );
          })}
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
export default Card;
