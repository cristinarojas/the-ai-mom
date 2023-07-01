// Dependencies
import { useState } from "react";

// Components
import AiChat from "./components/aiChat";
import PhotoMatch from "./components/photoMatch";

// Styles
import "./App.css";

function App() {
  // Local state
  const [matchingText, setMatchingText] = useState("");

  return (
    <>
      <div>
        <header className="app-header">
          <h4>Welcome to The AI Mom</h4>
        </header>
        <section className="app-body">
          <PhotoMatch matchingText={matchingText} />
          <section className="app-main-chat">
            <h1>Ask me anything!</h1>
            <AiChat setMatchingText={setMatchingText} />
          </section>
        </section>
      </div>
    </>
  );
}

export default App;
