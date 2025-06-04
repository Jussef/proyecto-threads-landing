import React from "react";
import { Grid, Card, CardContent, Avatar } from "@mui/material";

export default function Comunidad() {
  return (
    <div className="bg-gray-900 py-20 text-center">
      <h1 className="font-bold mb-10">Comunidad en acción</h1>
      <Grid container spacing={4} justifyContent="center">
        {[1, 2, 3].map((n) => (
          <Grid item xs={12} sm={6} md={4} key={n}>
            <Card className="bg-gray-800">
              <CardContent className="text-center">
                <Avatar src={`/foto${n}.jpg`} className="mx-auto mb-4 w-24 h-24" />
                <h1 className="text-black">"Me inspiró a crear por primera vez"</h1>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}