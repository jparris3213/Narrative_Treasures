import React, { useState } from "react";

function MarketForm() {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(0);
  const [noArmor, setNoArmor] = useState(false);
  const [noWeapons, setNoWeapons] = useState(false);
  const [noMagicItems, setNoMagicItems] = useState(false);
  const [noAventuringGear, setNoAventuringGear] = useState(false);
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
      setNoArmor(inputValue);
    } else if (inputType === "noWeapons") {
      setNoWeapons(inputValue);
    } else if (inputType === "noMagicItems") {
      setNoMagicItems(inputValue);
    } else if (inputType === "noAventuringGear") {
      setNoAventuringGear(inputValue);
    }
  };

  const hadleFormSubmit = (event) => {
    event.preventDefault();
    setErrorMessage("");

    if (maxValue <= minValue) {
      setErrorMessage(
        "Please set the Maximun Gold Value as more then the Minimun Gold Value"
      );
      return;
    }

    console.log(maxValue);
  };

  return (
    <form className="d-flex flex-column">
      <div className="d-flex p-2 bd-highlight flex-row justify-content-center">
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
          <label>Maximum Gold vValue:</label>
          <br />
          <input
            type="number"
            name="maxValue"
            min={0}
            value={maxValue}
            onChange={handleInputChange}
          />
          <br />
        </div>
        <fieldset className="p-4">
          <legend>Exclude</legend>
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
            name="noWeapons"
            value={noWeapons}
            onChange={handleInputChange}
          />
          <label> Weapons</label>
          <br />
          <input
            type="checkbox"
            name="noMagicItems"
            value={noMagicItems}
            onChange={handleInputChange}
          />
          <label> Magic Items</label>
          <br />
          <input
            type="checkbox"
            name="noAventuringGear"
            value={noAventuringGear}
            onChange={handleInputChange}
          />
          <label> Aventuring Gear</label>
          <br />
        </fieldset>
      </div>
      <div className="p-2 d-flex flex-column align-items-center">
        <input type="submit" onClick={hadleFormSubmit} className="w-25" />
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
