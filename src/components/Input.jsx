import React, { useState } from "react";
import { useRef } from "react";
import styles from "./Input.module.css";
const Input = () => {
  const weight = useRef(null);
  const height = useRef(null);
  const [weightV, setWeightV] = useState();
  const [heightV, setHeightV] = useState();
  const [result, setResult] = useState(0);
  const [bmiMessage, setBmiMessage] = useState("");
  const handleWeight = () => {
    setWeightV(weight.current.value);
  };

  const handleHeight = () => {
    setHeightV(height.current.value);
  };

  const handleResult = () => {
    if (weightV == 0 || heightV == 0) {
      alert(" Please Enter Value");
    } else {
      const bmiResult = ((weightV / (heightV * heightV)) * 783).toFixed(2);
      setResult(bmiResult);
    }

    if (result < 19) {
      setBmiMessage("You are underweight");
    } else if (result > 19 && result < 25) {
      setBmiMessage("You are Normal");
    } else if (result > 25 && result < 30) {
      setBmiMessage("You are overweight");
    } else if (result > 30) {
      setBmiMessage("Obesity");
    }
  };

  const handleReload = () => {
    weight.current.value = "";
    height.current.value = "";
    setResult("");
  };

  return (
    <div className={styles.input}>
      <div>
        <label htmlFor="weight">Weight (Ibs)</label>
        <input
          type="text"
          placeholder="Enter weight Value"
          onChange={handleWeight}
          ref={weight}
        />

        <label htmlFor="height">Height (In)</label>
        <input
          onChange={handleHeight}
          ref={height}
          type="text"
          placeholder="Enter height Value"
        />
      </div>

      <div className="d-grid gap-2">
        <button
          onClick={handleResult}
          className="btn btn-primary"
          type="button"
        >
          Submit
        </button>

        <button
          onClick={handleReload}
          className="btn btn-secondary"
          type="button"
        >
          Reload
        </button>
      </div>

      <div>
        <center>
          <strong>Your BMI is: {result}</strong>
          <br />
          <strong>{bmiMessage}</strong>
        </center>
      </div>
    </div>
  );
};

export default Input;
