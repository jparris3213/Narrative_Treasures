import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MONSTER_QUERY } from "../utils/api";
import Loading from "../components/Loading";
import Card from "../components/MonsterCard";

const Monster = () => {
  const [monster, setMonster] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    MONSTER_QUERY(id).then(({ data }) => {
      setMonster(data.monster);
    });
  }, []);

  return (
    <div>{monster.index === id ? <Card monster={monster} /> : <Loading />}</div>
  );
};

export default Monster;
