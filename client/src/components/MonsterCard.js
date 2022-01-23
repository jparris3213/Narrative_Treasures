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
      <div className="container">
        <div className="row">
          <table class="table ">
            <thead class="thead-dark">
              <tr>
                <th>CR</th>
                <th>Size</th>
                <th>Type</th>
                <th>Hit Dice</th>
                <th>Alignment</th>
                <th>AC</th>
                <th>HP</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{challengeRating}</td>
                <td>{size}</td>
                <td>
                  {type}:{subtype}
                </td>
                <td>{hitDice}</td>
                <td>{alignment}</td>
                <td>{armorClass}</td>
                <td>{hitPoints}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="container d-inline-flex">
        <div className="row d-inline-flex" style={{ width: "200px" }}>
          <table class="table">
            <thead class="thead-dark">
              <h2>Speed</h2>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Walk:</th>
                {walk ? <td> {walk}</td> : <></>}
              </tr>
              <tr>
                <th scope="row">Swim:</th>
                {swim ? <td> {swim}</td> : <td>n/a</td>}
              </tr>

              <tr>
                <th scope="row">Burrow:</th>
                {burrow ? <td> {burrow}</td> : <td>n/a</td>}
              </tr>

              <tr>
                <th scope="row">Fly:</th>
                {fly ? <td> {fly}</td> : <td>n/a</td>}
              </tr>

              <tr>
                <th scope="row">Climb:</th>
                {climb ? <td> {climb}</td> : <td>n/a</td>}
              </tr>

              <tr>
                <th scope="row">Hover:</th>
                {hover ? <td> {hover}</td> : <td>n/a</td>}
              </tr>
            </tbody>
          </table>
        </div>

        <div className="container" style={{ width: "200px" }}>
          <div className="row flex">
            <table class="table">
              <thead class="thead-dark">
                <h2>Base Stats</h2>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Str:</th>
                  {strength ? <td> {strength}</td> : <></>}
                </tr>
                <tr>
                  <th scope="row">Dex:</th>
                  {dexterity ? <td> {dexterity}</td> : <></>}
                </tr>

                <tr>
                  <th scope="row">Con:</th>
                  {constitution ? <td> {constitution}</td> : <></>}
                </tr>

                <tr>
                  <th scope="row">Int:</th>
                  {intelligence ? <td> {intelligence}</td> : <></>}
                </tr>

                <tr>
                  <th scope="row">Wis:</th>
                  {wisdom ? <td> {wisdom}</td> : <></>}
                </tr>

                <tr>
                  <th scope="row">Cha:</th>
                  {charisma ? <td> {charisma}</td> : <></>}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="container" style={{ width: "300px" }}>
          <div className="row flex">
            <table class="table">
              <thead class="thead-dark">
                <h2>Skills</h2>
                <tr>
                  <th>Value</th>
                  <th>Skill</th>
                </tr>
              </thead>
              <tbody>
                {proficiencies.map(({ proficiency, value }) => {
                  return (
                    <tr key={proficiency.name}>
                      <td>{value}</td>
                      {proficiency.name}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>


      </div>

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
