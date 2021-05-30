import React, { useState } from "react";
import "./Textarea.css";
import { Button } from "../Button/Button";
import Icon from "../../iconsConvert.js";

const Textarea = (props) => {
  const [value, setValue] = useState(props.name);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="Wrapper">
      <div className="HeadingDiv">
        <h2 className="Heading">Lämna gärna en kommentar</h2>
        <Icon name="Corona" size={50} />
      </div>
      <label>
        <textarea
          className="TextArea"
          key=""
          name="comment"
          value={value}
          onChange={handleChange}
          aria-label="Lämna gärna en kommentar om vad du tycker om webbsidan"
          maxLength={4096}
        />
      </label>
      <div className="buttonDiv">
        <Button primary={true} label={"Skicka"} />
      </div>
    </div>
  );
};

export default Textarea;
