import React from "react";

function Card(props) {
  const itemClass = props.class;
  function flipCard() {
    this.setState(open);
  }
}

if (itemClass === rare) {
  return (
    <div
      class={open ? "element-card open" : "element-card"}
      onClick={flipCard()}
    >
      <div class="front-facing front-facing-rare">
        <h1 class="abr">Rare</h1>
        <p class="title">Name of spcific item</p>
        <span class="atomic-number">Rare</span>
      </div>
      <div class="back-facing rare">
        <p>
          Copper is a chemical element with symbol Cu (from Latin: cuprum) and
          atomic number 29. It is a soft, malleable, and ductile metal with very
          high thermal and electrical conductivity.
        </p>
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
        <h1 class="abr">Common</h1>
        <p class="title">Name of spcific item</p>
        <span class="atomic-number">Common</span>
      </div>
      <div class="back-facing common">
        <p>
          Silver is the metallic element with the atomic number 47. Its symbol
          is Ag, from the Latin argentum, derived from the Greek ὰργὀς, and
          ultimately from a Proto-Indo-European language root reconstructed as
          *h2erǵ-, "grey" or "shining".
        </p>
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
        <h1 class="abr">Uncommon</h1>
        <p class="title">Name of spcific item</p>
        <span class="atomic-number">Uncommon</span>
      </div>
      <div class="back-facing uncommon">
        <p>
          Gold is a chemical element with symbol Au and atomic number 79. In its
          purest form, it is a bright, slightly reddish yellow, dense, soft,
          malleable, and ductile metal. Chemically, gold is a transition metal
          and a group 11 element.
        </p>
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
        <h1 class="abr">Artifact</h1>
        <p class="title">Name of spcific item</p>
        <span class="atomic-number">Artifact</span>
      </div>
      <div class="back-facing artifact">
        <p>
          Roentgenium is a chemical element with symbol Rg and atomic number
          111. It is an extremely radioactive synthetic element (an element that
          can be created in a laboratory but is not found in nature).
        </p>
        <p>
          <a class="btn" href="This will add to inventory" target="_blank">
            Add to inventory
          </a>
        </p>
      </div>
    </div>
  );
}

export default Card;
