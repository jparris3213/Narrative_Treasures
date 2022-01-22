import React, { useState } from "react";

function MonsterForm({ updateSort }) {
  const [minCR, setMinCR] = useState(0);
  const [maxCR, setMaxCR] = useState(0);
  const [type, setType] = useState("any");
  const [alignment, setSlignment] = useState("any alignment");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "minCR") {
      setMinCR(inputValue);
    } else if (inputType === "maxCR") {
      setMaxCR(inputValue);
    } else if (inputType === "type") {
      setType(inputValue);
    } else if (inputType === "alignment") {
      setSlignment(inputValue);
    }
  };

  const hadleFormSubmit = (event) => {
    event.preventDefault();
    setErrorMessage("");

    if (minCR !== 0 && maxCR !== 0) {
      if (maxCR <= minCR) {
        setErrorMessage(
          "Please set the Maximun CR value as more then the Minimun CR value"
        );
        return;
      }
    }

    updateSort({
      minCR: minCR,
      maxCR: maxCR,
      type: type,
      alignment: alignment,
    });
  };

  return (
    <form className="d-flex flex-column">
      <div className="d-flex p-2 bd-highlight flex-row justify-content-center">
        <div className="p-4">
          <label>Minimum Challenge Rating:</label>
          <br />
          <input
            type="number"
            name="minCR"
            min={0}
            value={minCR}
            onChange={handleInputChange}
          />
          <br />
          <label>Maximum Challenge Rating:</label>
          <br />
          <input
            type="number"
            name="maxCR"
            min={0}
            value={maxCR}
            onChange={handleInputChange}
          />
          <br />
          <p>
            Use decimals to do a lower value.
            <br />
            Leave values to not filter by CR.
          </p>
        </div>
        <fieldset className="p-4">
          <div className="d-flex flex-row">
            <label>Type:</label>
            <select name="type" value={type} onChange={handleInputChange}>
              <option value="">Any</option>
              <option value=" aberration"> Aberration</option>
              <option value="beast">Beast</option>
              <option value="celestial">Celestial</option>
              <option value="construct">Construct</option>
              <option value="dragon">Dragon</option>
              <option value="elemental">Elemental</option>
              <option value="fey">Fey</option>
              <option value="fiend">Fiend</option>
              <option value="giant">Giant</option>
              <option value="humanoid">Humanoid</option>
              <option value="monstrosity">Monstrosity</option>
              <option value="ooze">Ooze</option>
              <option value="plant">Plant</option>
              <option value="undead">Undead</option>
            </select>
            <label>Alignment:</label>
            <select
              name="alignment"
              value={alignment}
              onChange={handleInputChange}
            >
              <option value="">Any</option>
              <option value="lawful evil"> Lawful Evil</option>
              <option value="lawful neutral">Lawful Neutral</option>
              <option value="lawful good">Lawful Good</option>
              <option value="neutral evil">Neutral Evil</option>
              <option value="neutral">Neutral</option>
              <option value="neutral good">Neutral Good</option>
              <option value="chaotic evil">Chaotic Evil</option>
              <option value="chaotic neutral">Chaotic Nutral</option>
              <option value="chaotic good">Chaotic Good</option>
            </select>
          </div>
        </fieldset>
      </div>
      <div className="p-2 d-flex flex-column align-items-center">
        <button onClick={hadleFormSubmit} className="btn text-light w-25">
          Filter
        </button>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
    </form>
  );
}

export default MonsterForm;
