import React, { useState } from "react";

function MarketForm({ updateSort }) {
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
        </div>
        <fieldset className="p-4">
          <legend>Exclude</legend>
          <div className="d-flex flex-row">
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
          </div>
        </fieldset>
      </div>
      <div className="p-2 d-flex flex-column align-items-center">
        <input
          type="submit"
          onClick={hadleFormSubmit}
          className="btn text-light w-25"
        />
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
    </form>
  );
}

export default MarketForm;
