import React from "react";
import "./Loading.css";

function Loading() {
  return (
    <>
      <h1>Loading</h1>
      <img
        className="bg-light rounded-circle loading1"
        src="https://www.freeiconspng.com/thumbs/dragon-png/dragon-png-20.png"
        alt=""
      />
      <img
        className="bg-light rounded-circle loading2"
        src="https://www.freeiconspng.com/thumbs/dragon-png/dragon-png-20.png"
        alt=""
      />
      <img
        className="bg-light rounded-circle loading3"
        src="https://www.freeiconspng.com/thumbs/dragon-png/dragon-png-20.png"
        alt=""
      />
    </>
  );
}

export default Loading;
