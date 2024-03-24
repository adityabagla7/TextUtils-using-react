import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log(text);
    let ans = text.toUpperCase();
    setText(ans);
  };
  const handleDownClick = () => {
    console.log(text);
    let ans = text.toLowerCase();
    setText(ans);
  };
  const handleClearClick = () => {
    console.log(text);
    let ans = "";
    setText(ans);
  };
  const handleCapitalizeWordClick = () => {
    let lowercase = text.toLowerCase();
    let words = lowercase.split(" ");
    let newWords = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    let newText = newWords.join(" ");
    setText(newText);
  };
  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };
  const [text, setText] = useState(""); // Move useState inside the component
  // setText("Check");

  return (
    <>
      <div className="container my-3">
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="15"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleDownClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCapitalizeWordClick}>
          Make first letter capital
        </button>
      </div>
      <div className="container my-3">
        <h3>Summary</h3>
        <p>
          {text.split(" ").length - 1} words {text.length} characters
        </p>
        <p> Average time to read {text.split(" ").length === 1 ? 0 : 0.008 * (text.split(" ").length - 1)} minutes</p>
        <h3>Preview</h3>
        {text}
      </div>
    </>
  );
}
