export default function filterItems(data, sort) {
  const {
    minValue,
    maxValue,
    noArmor,
    noWeapon,
    noAdventuringGear,
    noTools,
    noMountsVehicles,
  } = sort;

  return data.filter((item) => {
    const {
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

    if (noArmor && categoryName === "Armor") {
      return false;
    } else if (noWeapon && categoryName === "Weapon") {
      return false;
    } else if (noAdventuringGear && categoryName === "Adventuring Gear") {
      return false;
    } else if (noTools && categoryName === "Tools") {
      return false;
    } else if (noMountsVehicles && categoryName === "Mounts and Vehicles") {
      return false;
    } else if (minValue === 0 && maxValue === 0) {
      return true;
    } else if (gpCost && (minValue > gpCost || gpCost > maxValue)) {
      return false;
    } else {
      return true;
    }
  });
}
