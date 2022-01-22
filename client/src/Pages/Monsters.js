import React, { useEffect, useState } from "react";
import { MONSTERS_QUERY } from "../utils/api";
import Card from "../components/MonstersCard";

const Monsters = () => {
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    MONSTERS_QUERY().then(({ data }) => {
      setMonsters(data.monsters);
    });
  }, []);

  return (
    <div>
      <div className="container text-center">
        <h1> Monsters to kill</h1>
      </div>

      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-6 g-3">
          {monsters.length !== 0 &&
            monsters.map((monster) => {
              return <Card monster={monster} key={monster.index} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Monsters;
