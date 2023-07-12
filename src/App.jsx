import React, { useMemo, useState } from "react";
import './app.css';

const App = () => {
  const [height, setHeight] = useState(180);
  const [weight, setWeight] = useState(70);

   function onWeightChange(event){
    setWeight(event.target.value)
   }

   function onHeightChange(event){
    setHeight(event.target.value)
   }

   const output = useMemo(() =>{
    const calculateHeight = height /100;

    return (weight/
    (calculateHeight * calculateHeight)).toFixed
    (1)
   },[weight,height]);

  return (
    <main>
      <h1>PROJECT : 2 <br /> BMI CALCULETOR</h1>
      <div className="input-section">
        <p className="slider-output">Weight: {weight}kg</p>
        <input
          className="input-slider"
          type="range"
          step="1"
          min="40"
          max="200"
          onChange={onWeightChange}
        />
        <p className="slider-output"> Height : {height}cm</p>
        <input className="input-slider" 
        type="range"
        onChange={onHeightChange}
        min='140'
        max='220'
         />
      </div>
      <div className="output-section">
        <p>Your BMI IS</p>
        <p className="output">{output}</p>
      </div>
    </main>
  );
}

export default App;
