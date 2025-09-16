import React, { useState } from "react";
import emojiDictionary from "./EmojiDictionary";
import "./EmojiReplacer.css";

const EmojiReplacer = () => {
  const [text, setText] = useState("");

  // Replace words with emojis
  const replaceWithEmojis = (input) => {
    if (!input) return "";

    const regex = new RegExp(`\\b(${Object.keys(emojiDictionary).join("|")})\\b`, "gi");

    return input.replace(regex, (match) => {
      const key = match.toLowerCase();
      return emojiDictionary[key] || match;
    });
  };

  const handleClear = () => setText("");

  return (
    <div className="emoji-replacer">
      <h1 className="title">Emoji Replacer App</h1>
      <textarea
        data-testid="input-textarea"
        className="input-box"
        placeholder="Type words like 'happy', 'love', 'pizza'..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows="6"
      />
      <div
        data-testid="output-box"
        className="output-box"
        aria-label="Converted emoji output"
      >
        {replaceWithEmojis(text)}
      </div>
      <button
        data-testid="clear-button"
        className="clear-btn"
        onClick={handleClear}
        aria-label="Clear text"
      >
        Clear
      </button>
    </div>
  );
};

export default EmojiReplacer;
