import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";

export default function Roadmap() {
  return (
    <div className="py-16">
      <h2 className="font-bold text-center mb-10">Roadmap</h2>
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
    </div>
  );
}