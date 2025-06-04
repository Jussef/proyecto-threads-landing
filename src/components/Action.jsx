import React from "react";
import { Link } from "react-router-dom";
import { Button, Chip } from "@mui/material";

export default function Action() {
  return (
    <div className="bg-gray-900 py-20 text-center">
      <h2 className="font-bold mb-6">¿Cómo participar?</h2>
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {["Diseñador", "Coder", "Guionista", "Tester"].map((role) => (
          <Chip key={role} label={role} variant="outlined" color="info" className="text-white border-gray-600" />
        ))}
      </div>
      <p className="text-sm text-gray-400 mb-4">No necesitas experiencia</p>
      <Link to="/unete">
        <Button variant="contained" color="secondary">
          Quiero unirme
        </Button>
      </Link>
    </div>
  );
}