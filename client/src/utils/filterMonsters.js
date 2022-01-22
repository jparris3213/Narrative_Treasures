export default function filterMonsters(data, sort) {
  const { minCR, maxCR, type, alignment } = sort;

  return data.filter((monster) => {
    const {
      challenge_rating: challengeRating,
      type: monsterType,
      alignment: monsterAlignment,
    } = monster;

    if (type && type !== "any" && type !== monsterType) {
      console.log("here");
      return false;
    } else if (
      alignment &&
      alignment !== "any alignment" &&
      alignment !== monsterAlignment
    ) {
      console.log("there");
      return false;
    } else if (minCR === 0 && maxCR === 0) {
      console.log("also");
      return true;
    } else if (minCR > challengeRating || challengeRating > maxCR) {
      console.log("maybe");
      return false;
    } else {
      return true;
    }
  });
}
