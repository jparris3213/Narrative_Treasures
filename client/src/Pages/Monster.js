import React, { useEffect, useState } from "react";
import { MONSTER_QUERY } from "../utils/api";
import Loading from "../components/Loading";
import Card from "../components/MonsterCard";

const Monster = () => {
  const [monster, setMonster] = useState([]);
  const url = window.location.pathname;
  const search = url.split("/").pop();

  useEffect(() => {
    MONSTER_QUERY(search).then(({ data }) => {
      setMonster(data.monster);
      console.log(monster);
    });
  }, []);

  return (
    <div>
      {monster.index === search ? <Card monster={monster} /> : <Loading />}
    </div>
  );
};

export default Monster;
