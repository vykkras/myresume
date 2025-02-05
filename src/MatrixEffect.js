import { useEffect } from "react";

const MatrixEffect = () => {
  useEffect(() => {
    const canvas = document.getElementById("matrixCanvas");

    if (!canvas) {
      console.error("Canvas element not found!");
      return;
    }

    const ctx = canvas.getContext("2d");

    if (!ctx) {
      console.error("Could not get 2D context!");
      return;
    }

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
    const matrix = letters.split("");

    const fontSize = 12;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    const draw = () => {
      if (!ctx) return; // Prevent crashes if ctx is null
      
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"; 
      ctx.fillRect(0, 0, canvas.width, canvas.height); // ✅ Fixed

      ctx.fillStyle = "#0F0";
      ctx.shadowColor= "#0F0";
      ctx.shadowBlur= 10;
      

      ctx.font = fontSize + "px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    const interval = setInterval(draw, 30);
    return () => clearInterval(interval);
  }, []);

  return <canvas id="matrixCanvas" style={{
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    zIndex: -1
  }}></canvas>;
};

export default MatrixEffect;
