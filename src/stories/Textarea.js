import React from "react";
import Button from "./Button";
import "./Textarea.css";
import { Primary } from "./Button.stories";
import Icon from "../../src/Icons.js";

const Textarea = () => {
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
          value={""}
          onChange={() => {
            ("");
          }}
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
