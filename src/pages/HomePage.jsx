import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Typography, Box, Grid, Card, CardContent, Avatar, Chip } from "@mui/material";
import { FaDiscord } from "react-icons/fa6";
import { FaThreads } from "react-icons/fa6";
import banner from "../assets/home/banner.png";

export default function HomePage() {
  return (
    <div id="home" className="bg-gray-900 text-white max-w-screen flex flex-col">
      {/* Navbar */}
      <header className="flex justify-between items-center px-6 py-4 border-b border-gray-800">
        <h1 className="text-xl font-bold text-white">Comunidad Threads</h1>
        <div className="flex gap-4">
          <Link to="https://discord.gg/SNG2xNeSjJ" target="_blank" rel="noopener noreferrer">
            <Button variant="outlined" color="inherit" startIcon={<FaDiscord />}>
              Discord
            </Button>
          </Link>
          <Link to="https://www.threads.com/@alienythe/post/DJnAInfynH0?xmt=AQF0QgI-GFPD8ajFRfbsPG9H1aT-n9NKGNT3CGoIWzxQXQ" target="_blank" rel="noopener noreferrer">
            <Button variant="outlined" color="inherit" startIcon={<FaThreads />}>
              Threads
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="text-center py-20 bg-gradient-to-b from-gray-900 to-gray-950">
        <img src={banner} alt="Arte comunidad" className="mx-auto rounded-xl mb-6 shadow-lg w-150 max-w-4xl" />
        <Typography variant="h3" className="font-bold mb-4">
          Desarrolladores de videojuegos en Threads
        </Typography>
        <Typography variant="subtitle1" className="mb-6 text-gray-300">
          Únete a crear un videojuego desde cero
        </Typography>
        <Link to="/unete">
          <Button variant="contained" size="large">
            Quiero ser parte
          </Button>
        </Link>
      </section>

      {/* Quiénes somos y meta */}
      <Container className="py-16">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" className="mb-2 font-bold">
              ¿Quiénes somos?
            </Typography>
            <ul className="text-gray-300 list-disc ml-6">
              <li>Nacimos en Threads</li>
              <li>Somos una comunidad colaborativa</li>
            </ul>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" className="mb-2 font-bold">
              Nuestra Meta
            </Typography>
            <ul className="text-gray-300 list-disc ml-6">
              <li>Crear un juego colectivo</li>
              <li>Organizar roles y comenzar pronto</li>
            </ul>
          </Grid>
        </Grid>
      </Container>

      {/* Cómo participar */}
      <section className="bg-gray-900 py-20 text-center">
        <Typography variant="h4" className="font-bold mb-6">
          ¿Cómo participar?
        </Typography>
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {["Diseñador", "Coder", "Guionista", "Tester"].map((role) => (
            <Chip key={role} label={role} variant="outlined" color="info" className="text-white border-gray-600" />
          ))}
        </div>
        <Typography className="text-sm text-gray-400 mb-4">No necesitas experiencia</Typography>
        <Link to="/unete">
          <Button variant="contained" color="secondary">
            Quiero unirme
          </Button>
        </Link>
      </section>

      {/* Roadmap */}
      <Container className="py-16">
        <Typography variant="h4" className="font-bold text-center mb-10">
          Roadmap
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {["Inicio comunidad", "Formación del equipo", "Prototipo", "Demo jugable"].map((step, idx) => (
            <Grid item xs={12} sm={6} md={3} key={idx}>
              <Card className="bg-gray-800">
                <CardContent className="text-center">
                  <Typography variant="h6" className="text-black mb-2">
                    {step}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Comunidad en acción */}
      <section className="bg-gray-900 py-20 text-center">
        <Typography variant="h4" className="font-bold mb-10">
          Comunidad en acción
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {[1, 2, 3].map((n) => (
            <Grid item xs={12} sm={6} md={4} key={n}>
              <Card className="bg-gray-800">
                <CardContent className="text-center">
                  <Avatar src={`/foto${n}.jpg`} className="mx-auto mb-4 w-24 h-24" />
                  <Typography className="text-black">"Me inspiró a crear por primera vez"</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </section>

      {/* FAQ */}
      <Container className="py-20">
        <Typography variant="h4" className="font-bold text-center mb-10">
          FAQ
        </Typography>
        <div className="space-y-6 max-w-3xl mx-auto text-gray-300">
          <div>
            <Typography className="font-semibold">¿Necesito saber programar?</Typography>
            <p>No. Tenemos espacio para diseñadores, guionistas, testers, y más.</p>
          </div>
          <div>
            <Typography className="font-semibold">¿Dónde nos organizamos?</Typography>
            <p>En nuestro canal de Discord y actualizaciones en Threads.</p>
          </div>
        </div>
      </Container>

      {/* Footer */}
      <footer className="bg-black py-8 text-center text-gray-500 text-sm">
        <p>© 2025 Comunidad Gamer</p>
        <p>Síguenos en Threads, Discord, X</p>
        <p>Contacto: hola@comunidadgamer.dev</p>
      </footer>
    </div>
  );
}
