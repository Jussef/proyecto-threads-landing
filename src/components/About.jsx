import React from "react";
import { Grid, Box } from "@mui/material";

export default function About() {
  return (
    <div id="about" className="py-16">
      <Grid container spacing={4} justifyContent="center" className="max-w-screen-lg mx-auto">
        <Grid item xs={12} md={6}>
          <div className="mb-6">
            <h3 className="mb-4 font-extrabold text-3xl about-title">¿Quiénes somos?</h3>
            <ul className="text-[#00ff87] text-lg font-semibold list-disc ml-6 mb-4">
              <li>Nacimos en Threads</li>
              <li>Somos una comunidad colaborativa</li>
            </ul>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <h3 className="mb-4 font-extrabold text-3xl about-title2">Nuestra Meta</h3>
          <ul className="text-[#00ff87] text-lg font-semibold list-disc ml-6 mb-4">
            <li>Crear un juego colectivo</li>
            <li>Organizar roles y comenzar pronto</li>
          </ul>
        </Grid>
      </Grid>
      <Box justifyContent="center" className="max-w-screen-lg mx-auto mt-10 px-5">
        <div className="bg-[#181c2f] rounded-lg p-4 mb-4 shadow-lg border border-[#7c3aed] ">
          <h1 className="text-[#00ff87] font-bold mb-2 text-lg">Proyecto actual:</h1>
          <pre className="bg-[#232946] text-[#bc57ff] font-mono text-base p-3 rounded-md overflow-x-auto whitespace-pre-wrap">
            {`Juego de sigilo con un alien cambiaformas escapando en un mundo futurista. 🌌👽🏙️`}
          </pre>
        </div>
      </Box>

      <Box className="max-w-screen-lg mx-auto px-5">
        <div className="mt-10">
          <span className="block text-xl font-extrabold text-[#7c3aed] mb-4 tracking-wide">
            Buscamos mentes creativas...
          </span>
          <ul className="space-y-3 text-lg">
            <li className="flex items-center gap-3 text-[#00ff87] font-semibold">
              <span role="img" aria-label="Programadores">👾</span>
              Programadores
            </li>
            <li className="flex items-center gap-3 text-[#bc57ff] font-semibold">
              <span role="img" aria-label="Artistas">🎨</span>
              Artistas
            </li>
            <li className="flex items-center gap-3 text-[#7c3aed] font-semibold">
              <span role="img" aria-label="Músicos">🎼</span>
              Músicos
            </li>
            <li className="flex items-center gap-3 text-[#fff] font-semibold">
              <span role="img" aria-label="Guionistas">✍️</span>
              Guionistas
            </li>
            <li className="flex items-center gap-3 text-[#00ff87] font-semibold">
              <span role="img" aria-label="Creativos" style={{ fontSize: "2rem", lineHeight: "1" }}>💡</span>
              ¡Y cualquier persona creativa con ganas de aportar!
            </li>
          </ul>
          <p className="mt-6 text-base text-gray-300 italic">
            Si tienes ideas, pasión por los videojuegos o simplemente quieres aprender y colaborar, este es tu lugar.
          </p>
        </div>
      </Box>
    </div>
  );
}
