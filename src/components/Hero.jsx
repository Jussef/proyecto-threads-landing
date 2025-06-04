import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import banner from "../assets/home/banner.png";
import "./styles.css"; // Asegúrate de importar el CSS

export default function Hero() {
  return (
    <div id="hero" className="text-center py-20 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="relative inline-block">
        <span
          className="absolute inset-0 z-0 rounded-xl blur-2xl pointer-events-none animate-purple-glow"
          style={{
            background: "radial-gradient(circle at 50% 50%, #a259ff 0%, #7c3aed 60%, transparent 100%)",
            opacity: 0.7,
          }}
        />
        <img
          src={banner}
          alt="Arte comunidad"
          className="relative z-10 mx-auto rounded-[16%] mb-6 shadow-lg w-[600px] max-w-full sm:w-[600px] xs:w-[350px]"
          style={{ maxWidth: "100%", paddingLeft: "20px", paddingRight: "20px" }}
        />
      </div>
      <p className="font-bold mb-10 mt-10 text-5xl">Comunidad de desarrolladores de videojuegos</p>
      <p className="text-gray-300 mb-10 mt-10 text-3xl">¿Y si hacemos un juego… juntos?</p>
      <Link to="https://discord.gg/SNG2xNeSjJ" target="_blank" rel="noopener noreferrer">
        <Button
          variant="contained"
          size="large"
          className="relative overflow-hidden px-8 py-3 rounded-xl font-extrabold text-lg shadow-xl border-2 border-black
            bg-gradient-to-r from-[#7c3aed] via-[#00ff87] to-[#1a1a1a]
            animate-eva01-bounce
            transition-all duration-300
            hover:scale-110 hover:rotate-1 hover:shadow-2xl
            before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#00ff87] before:via-[#7c3aed] before:to-[#1a1a1a] before:opacity-0 hover:before:opacity-30 before:transition-opacity before:duration-300
          "
          sx={{
            color: "#fff",
            textShadow: "0 2px 8px #000, 0 0px 2px #00ff87",
            letterSpacing: "2px",
            position: "relative",
            zIndex: 1,
          }}
        >
          Quiero ser parte
        </Button>
      </Link>
    </div>
  );
}
