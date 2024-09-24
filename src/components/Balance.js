import React from "react";

const balances = [
  {
    nombre: "Tomas",
    email: "tomas@example.com",
    porPagar: "$150.00",
    porCobrar: "$0.00",
  },
  {
    nombre: "Marco",
    email: "marco@example.com",
    porPagar: "$0.00",
    porCobrar: "$200.00",
  },
  {
    nombre: "Chiche",
    email: "chiche@example.com",
    porPagar: "$50.00",
    porCobrar: "$0.00",
  },
  {
    nombre: "Bauti",
    email: "bauti@example.com",
    porPagar: "$0.00",
    porCobrar: "$300.00",
  },
];

export const Balance = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Título y descripción */}
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-gray-900">Balance de Transacciones</h1>
        <p className="text-gray-600">Este es un resumen del balance financiero, mostrando las cantidades por pagar o por cobrar de los miembros.</p>
      </div>

      {/* Tabla */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr>
              <th className="p-4 text-left text-gray-700 font-semibold">Nombre</th>
              <th className="p-4 text-left text-gray-700 font-semibold">Email</th>
              <th className="p-4 text-left text-gray-700 font-semibold">Por Pagar</th>
              <th className="p-4 text-left text-gray-700 font-semibold">Por Cobrar</th>
              <th className="p-4 text-left text-gray-700 font-semibold">Total</th>
            </tr>
          </thead>
          <tbody>
            {balances.map((balance, index) => {
              // Calcular el total individual
              const totalIndividual = (
                parseFloat(balance.porPagar.replace("$", "")) +
                parseFloat(balance.porCobrar.replace("$", ""))
              ).toFixed(2);

              return (
                <tr key={index} className="border-t">
                  <td className="p-4 text-gray-900">{balance.nombre}</td>
                  <td className="p-4 text-gray-600">{balance.email}</td>
                  <td className="p-4 text-gray-600">{balance.porPagar}</td>
                  <td className="p-4 text-gray-600">{balance.porCobrar}</td>
                  <td className="p-4 text-gray-900">${totalIndividual}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Balance;
