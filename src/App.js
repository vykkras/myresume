// App.js
import React, { useState, useEffect } from "react";
import "./App.css";
import MatrixEffect from "./MatrixEffect";
import ProfessionalResume from "./ProfessionalResume";

function App() {
  // States for the interactive terminal
  const [glitch, setGlitch] = useState(false);
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");
  const [showResume, setShowResume] = useState(false);
  
  // State to determine which interface to show
  const [isProfessional, setIsProfessional] = useState(false);

  // Glitch effect & audio effect for the hacker interface
  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 150);
    }, Math.random() * 2500 + 500);

    const audio = new Audio("https://example.com/hacking-sound.mp3");
    audio.volume = 0.1;
    audio.addEventListener("canplaythrough", () => {
      audio.play().catch((error) => console.error("Audio play failed: ", error));
    });

    return () => {
      clearInterval(interval);
      audio.removeEventListener("canplaythrough", () => {});
    };
  }, []);

  // Handle terminal commands
  const handleCommand = () => {
    const command = input.trim().toLowerCase();

    if (command === "unlock resume" || command === "access resume.txt") {
      setShowResume(true);
      setMessage("✅ Access Granted. Resume Unlocked.");
    } else if (command === "help") {
      setMessage("💡 Try typing 'unlock resume' or 'access resume.txt' to proceed, but please dont type secret.log :(.");
    } else if (command === "whoami") {
      setMessage("👤 You are a recruiter trying to access my credentials.");
    } else if (command === "ls") {
      setMessage("📂 Files: resume.txt, secret.log");
    } else if (command === "secret.log") {
      window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ?autoplay=1&mute=1", "_blank");
    } else {
      setMessage("❌ Unknown command. Type 'help' for assistance.");
    }
    setInput("");
  };

  // If the user has clicked the boring button, only render the ProfessionalResume view.
  if (isProfessional) {
    return (
      <div className="App">
        <ProfessionalResume />
        <button
          onClick={() => {
            // Reset all states to return to the interactive terminal if needed.
            setIsProfessional(false);
            setShowResume(false);
            setMessage("");
            setInput("");
          }}
          style={{
            marginTop: "20px",
            background: "green",
            color: "white",
            padding: "10px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Reset Page 🤖
        </button>
      </div>
    );
  }

  // Otherwise, render the interactive hacker interface.
  return (
    <div className="App">
      <MatrixEffect />

      <h1 className={`glowing-text ${glitch ? "glitch-text flicker" : ""}`}>
        Welcome, recruiter. Use your knowledge to find my resume:
      </h1>

      <div className="terminal">
        <p>Type a command to access resume: (ask for help, i guess)</p>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type here..."
          onKeyDown={(e) => e.key === "Enter" && handleCommand()}
        />
        <button onClick={handleCommand}>Execute</button>
        {message && <p className="terminal-output">{message}</p>}
        {showResume && (
          <div className="terminal-resume">
            <h2>Here it is</h2>
            <p>Name: Victor Llivina</p>
            <p>Experience: Cyberpunk Developer Extraordinaire</p>
            <p>Skills: JavaScript, React, Matrix Hacker</p>
          </div>
        )}
      </div>

      {/* Boring Button to switch to Professional Resume */}
      <button
        onClick={() => {
          const confirmBoring = window.confirm("You agree then that you are not fun? 😒");
          if (confirmBoring) {
            setIsProfessional(true);
          }
        }}
        style={{ marginTop: "20px" }}
      >
        I'm boring, just show me the resume 😕
      </button>
    </div>
  );
}

export default App;


