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
          <table className="table ">
            <thead className="thead-dark">
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

      <div className="container d-inline-flex justify-content-around">
        <div className="row d-inline-flex" style={{ width: "200px" }}>
          <table className="table">
            <thead className="thead-dark">
              <h2>Speed</h2>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Walk:</th>
                {walk ? <td>{walk}</td> : <></>}
              </tr>
              <tr>
                <th scope="row">Swim:</th>
                {swim ? <td>{swim}</td> : <td>n/a</td>}
              </tr>

              <tr>
                <th scope="row">Burrow:</th>
                {burrow ? <td>{burrow}</td> : <td>n/a</td>}
              </tr>

              <tr>
                <th scope="row">Fly:</th>
                {fly ? <td>{fly}</td> : <td>n/a</td>}
              </tr>

              <tr>
                <th scope="row">Climb:</th>
                {climb ? <td>{climb}</td> : <td>n/a</td>}
              </tr>

              <tr>
                <th scope="row">Hover:</th>
                {hover ? <td>{hover}</td> : <td>n/a</td>}
              </tr>
            </tbody>
          </table>
        </div>

        <div className="d-inline-flex" style={{ width: "200px" }}>
          <div className="row flex">
            <table className="table">
              <thead className="thead-dark">
                <h2>Base Stats</h2>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Str:</th>
                  {strength ? <td>{strength}</td> : <></>}
                </tr>
                <tr>
                  <th scope="row">Dex:</th>
                  {dexterity ? <td>{dexterity}</td> : <></>}
                </tr>

                <tr>
                  <th scope="row">Con:</th>
                  {constitution ? <td>{constitution}</td> : <></>}
                </tr>

                <tr>
                  <th scope="row">Int:</th>
                  {intelligence ? <td>{intelligence}</td> : <></>}
                </tr>

                <tr>
                  <th scope="row">Wis:</th>
                  {wisdom ? <td>{wisdom}</td> : <></>}
                </tr>

                <tr>
                  <th scope="row">Cha:</th>
                  {charisma ? <td>{charisma}</td> : <></>}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="d-inline-flex" style={{ width: "200px" }}>
          <div className="row flex">
            <table className="table">
              <thead className="thead-dark">
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

      <div className="container d-inline-flex justify-content-around">
        <div className="container row d-inline-flex" style={{ width: "300px" }}>
          <div className="row flex">
            <table className="table">
              <thead className="thead-dark">
                <h2>Senses:</h2>
              </thead>
              <tbody>
                {darkvision ? (
                  <tr>
                    <th scope="row">Dark Vision:</th>
                    <td>{darkvision}</td>
                  </tr>
                ) : (
                  <></>
                )}
                {passive_perception ? (
                  <tr>
                    <th scope="row">Passive Perception:</th>
                    <td>{passive_perception}</td>
                  </tr>
                ) : (
                  <></>
                )}
                {tremorsense ? (
                  <tr>
                    <th scope="row">Tremorsense:</th>
                    <td>{tremorsense}</td>
                  </tr>
                ) : (
                  <></>
                )}
                {blindsight ? (
                  <tr>
                    <th scope="row">Blindsight:</th>
                    <td>{blindsight}</td>
                  </tr>
                ) : (
                  <></>
                )}
                {truesight ? (
                  <tr>
                    <th scope="row">Truesight:</th>
                    <td>{truesight}</td>
                  </tr>
                ) : (
                  <></>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="container row d-inline-flex" style={{ width: "300px" }}>
          <div className="row flex">
            <table className="table">
              <thead className="thead-dark">
                <h2>Languages:</h2>
              </thead>
              <tbody>
                {languages.split(", ").map((language) => {
                  return (
                    <tr key={language}>
                      <th>{language}</th>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="container d-inline-flex justify-content-around">
        <div className="row d-inline-flex" style={{ width: "300px" }}>
          <div className="row flex">
            <table className="table">
              <thead className="thead-dark">
                <h2>
                  Damage <br />
                  Vulnerablilities:
                </h2>
              </thead>
              <tbody>
                {damageVulnerabilities[0] ? (
                  damageVulnerabilities.map((type) => {
                    return <tr key={type}>{type}</tr>;
                  })
                ) : (
                  <tr>N/A</tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="container row d-inline-flex" style={{ width: "300px" }}>
          <div className="row flex">
            <table className="table">
              <thead className="thead-dark">
                <h2>
                  Damage <br />
                  Resistances:
                </h2>
              </thead>
              <tbody>
                {damageResistances[0] ? (
                  damageResistances.map((type) => {
                    return <tr key={type}>{type}</tr>;
                  })
                ) : (
                  <tr>N/A</tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        <div className="container row d-inline-flex" style={{ width: "300px" }}>
          <div className="row flex">
            <table className="table">
              <thead className="thead-dark">
                <h2>
                  Damage <br />
                  Immunities:
                </h2>
              </thead>
              <tbody>
                {damageImmunities[0] ? (
                  damageImmunities.map((type) => {
                    return <tr key={type}>{type}</tr>;
                  })
                ) : (
                  <tr>N/A</tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        <div className="container row d-inline-flex" style={{ width: "300px" }}>
          <div className="row flex">
            <table className="table">
              <thead className="thead-dark">
                <h2>
                  Condition <br />
                  Immunities:
                </h2>
              </thead>
              <tbody>
                {conditionImmunities[0] ? (
                  conditionImmunities.map((type) => {
                    return <tr key={type}>{type}</tr>;
                  })
                ) : (
                  <tr>N/A</tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="container d-inline-flex justify-content-around">
        {actions ? (
          <div
            className="container row d-inline-flex"
            style={{ width: "80vw" }}
          >
            <div className="row flex">
              <table className="table">
                <thead className="thead-dark">
                  <h2>Actions:</h2>
                </thead>
                <tbody>
                  {actions.map(({ name, desc }) => {
                    return (
                      <tr key={name}>
                        <th>{name}</th>
                        <td>{desc}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>

      <div className="container d-inline-flex justify-content-around">
        {special_abilities ? (
          <div
            className="container row d-inline-flex"
            style={{ width: "40vw" }}
          >
            <div className="row flex">
              <table className="table">
                <thead className="thead-dark">
                  <h2>Special Abilities:</h2>
                </thead>
                <tbody>
                  {special_abilities.map(({ name, desc }) => {
                    return (
                      <tr key={name}>
                        <th>{name}</th>
                        <td>{desc}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <></>
        )}
        {legendary_actions ? (
          <div
            className="container row d-inline-flex"
            style={{ width: "40vw" }}
          >
            <div className="row flex">
              <table className="table">
                <thead className="thead-dark">
                  <h2>Legendary Actions:</h2>
                </thead>
                <tbody>
                  {legendary_actions.map(({ name, desc }) => {
                    return (
                      <tr key={name}>
                        <th>{name}</th>
                        <td>{desc}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
export default Card;
