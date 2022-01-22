export default function filterMonsters(data, sort) {
  const { minCR, maxCR, type, alignment } = sort;

  return data.filter((monster) => {
    const {
      challenge_rating: challengeRating,
      type: monsterType,
      alignment: monsterAlignment,
    } = monster;

    if (type && type !== "any" && type !== monsterType) {
      return false;
    } else if (
      alignment &&
      alignment !== "any alignment" &&
      alignment !== monsterAlignment
    ) {
      return false;
    } else if (minCR === 0 && maxCR === 0) {
      return true;
    } else if (minCR > challengeRating || challengeRating > maxCR) {
      return false;
    } else {
      return true;
    }
  });
}
