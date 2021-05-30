import React, { useState } from "react";
import "./Input.css";
import { Primary } from "../Button/Button.stories";

const Input = (props) => {
  const [value, setValue] = useState(props.name);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="Wrapper">
      <label>
        <input
          className="InputField"
          placeholder="Sök"
          key=""
          name="comment"
          value={value}
          onChange={handleChange}
          aria-label="Vad söker du efter?"
          maxLength={4096}
        />
      </label>
      <Primary primary={true} label={"Sök"} />
    </div>
  );
};

export default Input;
