// Dependencies
import { useState } from "react";

// Components
import PhotoMatch from "./components/photoMatch";

// Styles
import "./App.css";

function App() {
  // Local state
  const [inputValue, setInputValue] = useState("");
  const [existentPhotos] = useState(["mainMom", "toddler", "milk"]);
  const [matchingText, setMatchingText] = useState("");

  // Methods
  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);

    const words = e.target.value.split(" ");

    const foundWord = words.find((word: string) =>
      existentPhotos.includes(word.toLowerCase())
    );

    setMatchingText(foundWord || "");
  };

  return (
    <>
      <div>
        <header className="app-header">
          <h4>Welcome to - The AI Mom -</h4>
        </header>
        <section className="app-body">
          <PhotoMatch matchingText={matchingText} />
          <section className="app-main-chat">
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
