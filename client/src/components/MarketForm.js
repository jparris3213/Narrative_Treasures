import React, { useState } from "react";

function MarketForm({ updateSort }) {
  const [shopName, setShopName] = useState("");
  const [inflationValue, setInflationValue] = useState(1);
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(0);
  const [noArmor, setNoArmor] = useState(false);
  const [noWeapon, setNoWeapon] = useState(false);
  const [noAdventuringGear, setNoAdventuringGear] = useState(false);
  const [noTools, setNoTools] = useState(false);
  const [noMountsVehicles, setNoMountsVehicles] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "minValue") {
      setMinValue(inputValue);
    } else if (inputType === "maxValue") {
      setMaxValue(inputValue);
    } else if (inputType === "noArmor") {
      setNoArmor(noArmor ? false : true);
    } else if (inputType === "noWeapon") {
      setNoWeapon(noWeapon ? false : true);
    } else if (inputType === "noAventuringGear") {
      setNoAdventuringGear(noAdventuringGear ? false : true);
    } else if (inputType === "noTools") {
      setNoTools(noTools ? false : true);
    } else if (inputType === "noMountsVehicles") {
      setNoMountsVehicles(noMountsVehicles ? false : true);
    } else if (inputType === "shopName") {
      setShopName(inputValue);
    } else if (inputType === "inflationValue") {
      setInflationValue(inputValue);
    }
  };

  const hadleFormSubmit = (event) => {
    event.preventDefault();
    setErrorMessage("");

    if (minValue !== 0 && maxValue !== 0) {
      if (maxValue <= minValue) {
        setErrorMessage(
          "Please set the Maximun Gold Value as more then the Minimun Gold Value"
        );
        return;
      }
    }

    updateSort({
      shopName: shopName,
      inflationValue: inflationValue,
      minValue: minValue,
      maxValue: maxValue,
      noArmor: noArmor,
      noWeapon: noWeapon,
      noAdventuringGear: noAdventuringGear,
      noTools: noTools,
      noMountsVehicles: noMountsVehicles,
    });
  };

  return (
    <form className="d-flex flex-column">
      <div className="d-flex p-1 bd-highlight flex-row justify-content-center">
        <div className="p-4">
          <label>Shop Name:</label>
          <br />
          <input
            type="text"
            name="shopName"
            value={shopName}
            onChange={handleInputChange}
          />
          <br />
          <label>Minimum Gold Value:</label>
          <br />
          <input
            type="number"
            name="minValue"
            min={0}
            value={minValue}
            onChange={handleInputChange}
          />
          <br />
          <label>Maximum Gold Value:</label>
          <br />
          <input
            type="number"
            name="maxValue"
            min={0}
            value={maxValue}
            onChange={handleInputChange}
          />
          <br />
          <p>
            Use decimals to do a lower value.
            <br />
            Leave values to not filter by price.
          </p>
          <label>Price Modifier:</label>
          <br />
          <input
            type="number"
            name="inflationValue"
            value={inflationValue}
            onChange={handleInputChange}
          />
          <br />
          <p>This changes the cost of the Item</p>
          <p></p>
          <fieldset>
            <legend>Exclude</legend>
            <div>
              <input
                type="checkbox"
                name="noWeapon"
                value={noWeapon}
                onChange={handleInputChange}
              />
              <label> Weapons</label>
              <br />
              <input
                type="checkbox"
                name="noArmor"
                value={noArmor}
                onChange={handleInputChange}
              />
              <label> Armor</label>
              <br />
              <input
                type="checkbox"
                name="noAventuringGear"
                value={noAdventuringGear}
                onChange={handleInputChange}
              />
              <label> Aventuring Gear</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="noTools"
                value={noTools}
                onChange={handleInputChange}
              />
              <label> Tools</label>
              <br />
              <input
                type="checkbox"
                name="noMountsVehicles"
                value={noMountsVehicles}
                onChange={handleInputChange}
              />
              <label> Mounts and Vehicles</label>
            </div>
          </fieldset>
          <input
            type="submit"
            onClick={hadleFormSubmit}
            className="btn text-light"
          />
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
        </div>
      </div>
    </form>
  );
}

export default MarketForm;
