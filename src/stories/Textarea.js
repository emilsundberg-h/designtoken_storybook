import React, { useState } from "react";
import Button from "./Button";
import "./Textarea.css";
import { Primary } from "./Button.stories";
import Icon from "../../src/Icons.js";

const Textarea = (props) => {
  const [value, setValue] = useState(props.name);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="Wrapper">
      <div className="HeadingDiv">
        <h2 className="Heading">Berätta mer om din upplevelse</h2>
        <Icon name="heart" size={21} />
      </div>
      <label>
        <textarea
          className="TextArea"
          placeholder="Lämna gärna en kommentar"
          key=""
          name="comment"
          value={value}
          onChange={handleChange}
          aria-label="Lämna gärna en kommentar om vad du tycker om webbsidan"
          maxLength={4096}
        />
      </label>
      <div className="buttonDiv">
        <Primary primary={true} label={"Skicka"}>
          Skicka
        </Primary>
      </div>
    </div>
  );
};

export default Textarea;
