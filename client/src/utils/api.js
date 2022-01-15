async function ALL_EQUEPMENT() {
  let data = await fetch("https://www.dnd5eapi.co/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
          query AllEquepment {
            equipments {
              index
              name
              equipment_category {
                name
              }
              cost {
                quantity
                unit
              }
              weapon_range
              damage {
                damage_dice
                damage_type {
                  name
                }
              }
              range {
                normal
                long
              }
              properties {
                name
              }
            }
          }
        `,
    }),
  });
  return data.json();
}

async function MAGIC_ITEMS() {
  let data = await fetch("https://www.dnd5eapi.co/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
      query MagicItems {
        magicItems {
          index
          name
          equipment_category {
            name
          }
          desc
        }
      }
          `,
    }),
  });
  return data.json();
}

async function MONSTERS_QUERY() {
  let data = await fetch("https://www.dnd5eapi.co/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query Monsters {
            monsters{
              index
              name
              challenge_rating
              hit_points
              alignment
              size
              type
            }
          }
            `,
    }),
  });
  return data.json();
}

async function MONSTER_QUERY(filter) {
  let data = await fetch("https://www.dnd5eapi.co/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query monsterQuery($filter: FilterFindOneMonsterInput){
            monster(filter: $filter){
              index
              name
              size
              type
              subtype
              alignment
              armor_class
              hit_points
              hit_dice
              forms{
                name
              }
              speed{
                walk
                swim
                burrow
                fly
                climb
                hover
              }
              strength
              dexterity
              constitution
              intelligence
              wisdom
              charisma
              proficiencies{
                proficiency{
                  name
                }
                value
              }
              damage_vulnerabilities
              damage_resistances
              damage_immunities
              condition_immunities{
                name
              }
              senses{
                darkvision
                passive_perception
                blindsight
                truesight
                tremorsense
              }
              languages
              challenge_rating
              special_abilities{
                name
                desc
              }
              actions{
                name
                desc
                damage{
                  damage_dice
                  damage_type{
                    name
                  }
                }
                attack_bonus
                
              }
              legendary_actions{
                name
                desc
                attack_bonus
              }
            }
          }
              `,
      variable: {
        filter: {
          index: filter,
        },
      },
    }),
  });
  return data.json();
}

export { MAGIC_ITEMS, ALL_EQUEPMENT, MONSTERS_QUERY, MONSTER_QUERY };
