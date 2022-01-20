export default function sort(data, sort) {
  const {
    minValue,
    maxValue,
    noArmor,
    noWeapons,
    noMagicItems,
    noAventuringGear,
  } = sort;

  return data.filter((item) => {
    const {
      magic,
      equipment_category: { name: categoryName },
      cost: { quantity, unit },
    } = item;

    let gpCost = 0;
    if (unit === "gp") {
      gpCost = quantity;
    } else if (unit === "sp") {
      gpCost = quantity * 0.1;
    } else if (unit === "cp") {
      gpCost = quantity * 0.01;
    }

    if (noMagicItems && magic) {
      return false;
    } else if (noArmor && categoryName === "Armor") {
      return false;
    } else if (noWeapons && categoryName === "Weapons") {
      return false;
    } else if (noAventuringGear && categoryName === "Adventuring Gear") {
      return false;
    } else if (gpCost && (minValue > gpCost || gpCost > maxValue)) {
      return false;
    } else {
      return true;
    }
  });
}
