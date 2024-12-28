import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [boxColor, setBoxColor] = useState("white");

  return (
    <div
      style={{
        backgroundColor: "black", // Black background remains fixed
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: boxColor, // Box color changes dynamically
          borderRadius: "20px",
          padding: "30px",
          textAlign: "center",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
          height: "400px",
        }}
      >
        <h1 style={{ marginBottom: "20px", color: "white" }}>Background Color Changer</h1>
        <div style={{ display: "flex", gap: "10px", justifyContent: "center", marginTop: "100px" }}>
          {["red", "blue", "green", "yellow", "purple"].map((color) => (
            <button
              key={color}
              style={{
                backgroundColor: color,
                color: "white",
                border: "none",
                borderRadius: "15px",
                padding: "10px 20px",
                cursor: "pointer",
                fontSize: "16px",
              }}
              onClick={() => setBoxColor(color)} // Change only the box color
            >
              {color.charAt(0).toUpperCase() + color.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;

