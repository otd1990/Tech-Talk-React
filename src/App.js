import React, { useState } from "react";
import "./App.css";

function App() {
  const [imageUrl, setImageUrl] = useState("");
  const [message, setMessage] = useState(
    "Hit the button below to get started!"
  );

  const fetchImage = async () => {
    const result = await fetch("https://source.unsplash.com/random/300x300");
    const url = result.url;

    setImageUrl(url);
    setMessage("");
  };

  const resetImage = () => {
    setImageUrl("");
    setMessage("Hit the button below to get started!");
  };

  return (
    <div className="App">
      <h1 class="heading">Random Image Generator</h1>
      <p class={message ? "show" : "hide"}>{message}</p>
      <img class={imageUrl ? "show" : "hide"} src={imageUrl} alt="Random" />
      <div class="buttons-container">
        <button class="button-primary" onClick={fetchImage}>
          Generate
        </button>
        <button
          class={`button-secondary ${imageUrl ? "show" : "hide"}`}
          onClick={resetImage}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
