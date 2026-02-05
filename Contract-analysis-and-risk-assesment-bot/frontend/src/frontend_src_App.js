import React from "react";
import "./App.css";

function App() {
  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("http://127.0.0.1:8000/upload/", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    alert(`Upload Status: ${data.status}\nFile: ${data.filename}`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Contract Analysis and Risk Assessment Bot</h1>
        <input type="file" onChange={handleFileUpload} />
      </header>
    </div>
  );
}

export default App;