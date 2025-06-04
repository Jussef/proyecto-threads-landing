import React from "react";

export default function Faq() {
  return (
    <div className="py-20">
      <p className="font-bold text-center mb-10">FAQ</p>
      <div className="space-y-6 max-w-3xl mx-auto text-gray-300">
        <div>
          <p className="font-semibold">¿Necesito saber programar?</p>
          <p>No. Tenemos espacio para diseñadores, guionistas, testers, y más.</p>
        </div>
        <div>
          <p className="font-semibold">¿Dónde nos organizamos?</p>
          <p>En nuestro canal de Discord y actualizaciones en Threads.</p>
        </div>
      </div>
    </div>
  );
}