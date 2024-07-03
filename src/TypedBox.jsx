import React, { useState } from "react";

const TypedBox = () => {
  const [text, setText] = useState("");
  const [submittedText, setSubmittedText] = useState("");
  const [count, setCount] = useState(100);
  const [warning, setWarning] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedText(text);
    setCount(100);
    setText("");
    console.log(text);
  };


  const handleChange = (e) => {
    const { value } = e.target;
    setText(value);
    setCount(100 - value.length);
    if (value.length >= 90) {
      setWarning(true);
    } else {
      setWarning(false);
    }
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          onChange={handleChange}
          value={text}
          maxLength={100}
          placeholder="Type your text here....."
        ></textarea>
        <div>
          <p>Character remaining : {count}</p>
          {warning && (
            <p style={{ color: "red" }}>Remaining characters are 10</p>
          )}
        </div>
        <button type="submit" disabled={count < 0}>
          Submit
        </button>
      </form>
      <hr />

      <h1>Your text...</h1>
      {submittedText && <p>{submittedText}</p>}
    </div>
  );
};

export default TypedBox;
