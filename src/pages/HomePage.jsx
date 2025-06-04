import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Typography, Box, Grid, Card, CardContent, Avatar, Chip } from "@mui/material";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Action from "../components/Action";
import Roadmap from "../components/Roadmap";
import Comunidad from "../components/Comunidad";
import FAQ from "../components/Faq";

export default function HomePage() {
  useEffect(() => {
    document.title = "Comunidad Gamer - Inicio";
    console.log("%c No hay nada que ver aquí!", "color: #ff001e; font-size: 24px; font-weight: bold;");
    console.log("%c Si quieres mejor unete a nosotros", "color: #bc57ff");
    console.log("%c Discord: https://discord.gg/SNG2xNeSjJ", "color: #00ff87");
  }, []);

  return (
    <div id="home" className="bg-gray-900 text-white max-w-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* Quiénes somos - about */}
      <About />

      {/* Cómo participar */}
      {/* <Action /> */}

      {/* Roadmap */}
      {/* <Roadmap /> */}


      {/* Comunidad en acción */}
      {/* <Comunidad /> */}

      {/* FAQ */}
      {/* <FAQ /> */}

      {/* Footer */}
      <footer className="bg-black py-8 text-center text-gray-500 text-sm">
        <p>© 2025 Comunidad Gamer</p>
        <p>Síguenos en Threads, Discord, X</p>
        <p>Contacto: hola@comunidadgamer.dev</p>
      </footer>
    </div>
  );
}
