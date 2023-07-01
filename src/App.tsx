// Dependencies
import { useState } from "react";

// Styles
import "./App.css";

function App() {
  // Local state
  const [inputValue, setInputValue] = useState("");
  const [arrayValues] = useState(["mainMom", "toddler", "milk"]);
  const [matchingText, setMatchingText] = useState("");

  // Methods
  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
    const words = e.target.value.split(" ");
    console.log(words);
    const foundWord = words.find((word: string) =>
      arrayValues.includes(word.toLowerCase())
    );
    console.log(foundWord);

    setMatchingText(foundWord || "");
  };

  return (
    <>
      <div>
        <header className="App-header">
          <h4>Welcome to - The AI Mom -</h4>
        </header>
        <section className="App-body">
          <section className="App-main-photo">
            {matchingText ? (
              <img src={`/photos/${matchingText}.jpg`} alt="logo" />
            ) : (
              <img
                src={"/photos/mainMom.jpg"}
                className="App-logo"
                alt="logo"
              />
            )}
          </section>
          <section className="App-main-chat">
            <h1>Ask me anything!</h1>

            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Enter a value..."
            />
            {matchingText && <p>Matching string: {matchingText}</p>}
          </section>
        </section>
      </div>
    </>
  );
}

export default App;
