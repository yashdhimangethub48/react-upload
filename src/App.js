import React, { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Content Uploaded!");
  };

  return (
    <div className="App">
      <h1>Upload Content and Image</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          rows="4"
          cols="50"
          placeholder="Enter your content"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <br />
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <br />
        <button type="submit">Upload</button>
      </form>

      {text && (
        <div className="output">
          <h2>Uploaded Content:</h2>
          <p>{text}</p>
        </div>
      )}

      {preview && (
        <div className="output">
          <h2>Uploaded Image:</h2>
          <img src={preview} alt="Uploaded" width="300" />
        </div>
      )}
    </div>
  );
}

export default App;