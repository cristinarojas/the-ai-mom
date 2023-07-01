// Dependencies
import { useState } from "react";

// Styles
import "./../../App.css";

// Types
type Props = {
  setMatchingText: (string: string) => void;
};

const AiChat = ({ setMatchingText }: Props): any => {
  // Local state
  const [inputValue, setInputValue] = useState("");
  const [existentPhotos] = useState(["mainMom", "toddler", "milk"]);

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
      <div className="ai-chat">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter your question..."
        />
      </div>
    </>
  );
};

export default AiChat;
