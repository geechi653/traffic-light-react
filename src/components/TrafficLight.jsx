import { useState } from "react";

function TrafficLight() {
  const [color, setActiveLight] = useState('red');

  const handleLightClick = (color) => {
    setActiveLight(color);
  };
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <div className="pole"></div>
      <div className="body border border-5 border-black bg-black p-2">
        <div
          className={`rounded-circle bg-danger ${
            color === "red" ? "light-active" : ""
          }`}
          onClick={() => handleLightClick("red")}
        ></div>
        <div
          className={`rounded-circle bg-warning ${
            color === "yellow" ? "light-active" : ""
          }`}
          onClick={() => handleLightClick("yellow")}
        ></div>
        <div
          className={`rounded-circle bg-success ${
            color === "green" ? "light-active" : ""
          }`}
          onClick={() => handleLightClick("green")}
        ></div>
      </div>
    </div>
  );
}

export default TrafficLight;
