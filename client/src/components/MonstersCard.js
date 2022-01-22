import React, { useState } from "react";
import { Link } from "react-router-dom";

function Card(props) {
  const { monster } = props;

  const [isOpen, setIsOpen] = useState(false);

  function flipCard(event) {
    setIsOpen(!isOpen);
  }

  const {
    index,
    name,
    challenge_rating: challengeRating,
    hit_points: hitPoints,
    alignment,
    size,
    type,
  } = monster;

  let rarity = "";

  if (challengeRating < 1) rarity = "common";
  else if (challengeRating < 5) rarity = "uncommon";
  else if (challengeRating < 15) rarity = "rare";
  else rarity = "artifact";

  return (
    <div className="container">
      <div
        className={isOpen ? "element-card open" : "element-card"}
        onClick={flipCard}
      >
        <div className={`front-facing front-facing-${rarity}`}>
          <h1 className="abr">{name}</h1>
          <p className="title">{type}</p>
          <span className="atomic-number">CR: {challengeRating}</span>
        </div>
        <div className={`back-facing ${rarity}`}>
          <p>{name}</p>
          <p>Challenge Rating: {challengeRating}</p>
          <p>Hit Points: {hitPoints}</p>
          <p>alignment: {alignment}</p>
          <p>size: {size}</p>
          <p>
            <Link className="btn" to={`/monster/${index}`}>
              More Stats
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
