import React from "react";

// Front eqp: name cata cost. Back: Range, damage, damage type
// Front spells: name and cata. Back: description.

function Card(props) {
  function flipCard() {
    this.setState(open);
    if (open) {
      this.setState();
    }
  }

  if (itemClass === rare) {
    return (
      <div
        class={open ? "element-card open" : "element-card"}
        onClick={flipCard()}
      >
        <div class="front-facing front-facing-rare">
          <h1 class="abr">Name</h1>
          <p class="title">Catagory</p>
          <span class="atomic-number">Cost</span>
        </div>
        <div class="back-facing rare">
          <p>Range: Fill</p>
          <p>Damage: Fill</p>
          <p>Damage type: Fill</p>
          <p>
            <a class="btn" href="This will add to inventory" target="_blank">
              Add to inventory
            </a>
          </p>
        </div>
      </div>
    );
  }
  if (itemClass === common) {
    return (
      <div
        class={open ? "element-card open" : "element-card"}
        onClick={flipCard()}
      >
        <div class="front-facing front-facing-common">
          <h1 class="abr">Name</h1>
          <p class="title">Catagory</p>
          <span class="atomic-number">Cost</span>
        </div>
        <div class="back-facing common">
          <p>Range: Fill</p>
          <p>Damage: Fill</p>
          <p>Damage type: Fill</p>
          <p>
            <a class="btn" href="This will add to inventory" target="_blank">
              Add to inventory
            </a>
          </p>
        </div>
      </div>
    );
  }
  if (itemClass === uncommon) {
    return (
      <div
        class={open ? "element-card open" : "element-card"}
        onClick={flipCard()}
      >
        <div class="front-facing front-facing-uncommon">
          <h1 class="abr">Name</h1>
          <p class="title">Catagory</p>
          <span class="atomic-number">Cost</span>
        </div>
        <div class="back-facing uncommon">
          <p>Range: Fill</p>
          <p>Damage: Fill</p>
          <p>Damage type: Fill</p>
          <p>
            <a class="btn" href="This will add to inventory" target="_blank">
              Add to inventory
            </a>
          </p>
        </div>
      </div>
    );
  }
  if (itemClass === artifact) {
    return (
      <div
        class={open ? "element-card open" : "element-card"}
        onClick={flipCard()}
      >
        <div class="front-facing front-facing-artifact">
          <h1 class="abr">Name</h1>
          <p class="title">Catagory</p>
          <span class="atomic-number">Cost</span>
        </div>
        <div class="back-facing artifact">
          <p>Range: Fill</p>
          <p>Damage: Fill</p>
          <p>Damage type: Fill</p>
          <p>
            <a class="btn" href="This will add to inventory" target="_blank">
              Add to inventory
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default Card;
