import React, { useEffect, useState } from "react";
import { MONSTERS_QUERY } from "../utils/api";
import Card from "../components/MonstersCard";
import MonsterForm from "../components/MonsterForm";
import filterMonsters from "../utils/filterMonsters";
import Loading from "../components/Loading";

const Monsters = () => {
  const [monsters, setMonsters] = useState([]);
  const [displayMonsters, setDisplayMonsters] = useState([]);
  const [sort, setSort] = useState({});

  useEffect(() => {
    MONSTERS_QUERY().then(({ data }) => {
      setMonsters(data.monsters);
    });
  }, []);

  useEffect(() => {
    setDisplayMonsters(filterMonsters(monsters, sort));
  }, [monsters, sort]);

  function updateSort(newSort) {
    setSort(newSort);
  }

  return (
    <div>
      <MonsterForm updateSort={updateSort} />
      <div className="container text-center">
        <h1> Monsters to kill</h1>
      </div>

      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-6 g-3">
          {displayMonsters.length ? (
            displayMonsters.map((monster) => {
              return <Card monster={monster} key={monster.index} />;
            })
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </div>
  );
};

export default Monsters;
