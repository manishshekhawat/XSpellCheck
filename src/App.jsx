import { useEffect, useState } from "react";
import "./App.css";

const customDictionary = {
  teh: "the",

  wrok: "work",

  fot: "for",

  exampl: "example",
};

function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
  const inputArray = input.split(" ");

  const misspelledWord = inputArray.find((word) => {
    const lowerWord = word.toLowerCase();
    return customDictionary[lowerWord];
  });

  if (misspelledWord) {
    setOutput(customDictionary[misspelledWord.toLowerCase()]);
  } else {
    setOutput("");
  }
}, [input]);


  return (
    <>
      <h1>Spell Check and Auto-Correction</h1>
      <textarea
        placeholder="Enter text..."
        onChange={handleChange}
        style={{ width: "300px", height: "100px" }}
      />
      {output && <p>Did you mean: {output}?</p>}
    </>
  );
}

export default App;
