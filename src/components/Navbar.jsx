import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { FaDiscord, FaThreads } from "react-icons/fa6";

export default function Navbar() {
  return (
    <header id='navbar' className="flex justify-between items-center px-6 py-4 border-b border-gray-800">
      <h1 className="text-xl font-bold text-white">Comunidad</h1>
      <div className="hidden sm:flex gap-4">
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
  );
}