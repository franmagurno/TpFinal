import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Importar el hook useNavigate

const members = [
  { nombre: "Tomas machuca", email: "tomasmachuca@gmail.com" },
  { nombre: "Marco riccitelli", email: "marcoriccitelli@gmail.com" },
  { nombre: "Franco Magurno", email: "francomagurno@gmail.com" },

];

// Pagos simulados: quién pagó y cuánto.
const payments = [
  { paidBy: 'tomasmachuca@gmail.com', amount: 999 },
  { paidBy: 'marcoriccitelli@gmail.com', amount: 400 },
  { paidBy: 'francomagurno@gmail.com', amount: 80 },

];

export const Balance = () => {
  const [balances, setBalances] = useState([]);
  const navigate = useNavigate(); // Definir el hook para redirigir

  // Función para calcular los balances
  const calculateBalances = () => {
    const totalAmount = payments.reduce((acc, payment) => acc + payment.amount, 0);
    const share = totalAmount / members.length; // Cuánto debería pagar cada uno
    const tempBalances = members.map((member) => {
      // Cuánto pagó el miembro
      const paidByMember = payments.find((payment) => payment.paidBy === member.email)?.amount || 0;
      const balance = paidByMember - share; // Positivo significa que debe cobrar, negativo que debe pagar

      const porPagar = balance < 0 ? Math.abs(balance).toFixed(2) : 0;
      const porCobrar = balance > 0 ? balance.toFixed(2) : 0;

      // Determinar el estado (A Favor o Deuda)
      let estado = "A Favor";
      let estadoClass = "bg-green-200 text-green-700"; // Estilos para A Favor
      if (porPagar > porCobrar) {
        estado = "Deuda";
        estadoClass = "bg-red-200 text-red-700"; // Estilos para Deuda
      }

      return {
        nombre: member.nombre,
        email: member.email,
        porPagar: `$${porPagar}`,
        porCobrar: `$${porCobrar}`,
        estado,
        estadoClass, // Clase CSS para el estilo condicional
      };
    });
    setBalances(tempBalances);
  };

  useEffect(() => {
    calculateBalances();
  }, []);

  const handleClose = () => {
    navigate("/cerrar-balance"); // Redirigir a la ruta cerrar-balance
  };

  return (
    <div className="container mx-auto p-4">
      {/* Título y descripción */}
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-gray-900">Balance de Transacciones</h1>
        <p className="text-gray-600">
          Este es un resumen del balance financiero, mostrando las cantidades
          por pagar o por cobrar de los miembros.
        </p>
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
              <th className="p-4 text-left text-gray-700 font-semibold">Estado</th>
            </tr>
          </thead>
          <tbody>
            {balances.map((balance, index) => (
              <tr key={index} className="border-t">
                <td className="p-4 text-gray-900">{balance.nombre}</td>
                <td className="p-4 text-gray-600">{balance.email}</td>
                <td className="p-4 text-gray-600">{balance.porPagar}</td>
                <td className="p-4 text-gray-600">{balance.porCobrar}</td>
                <td className="p-4">
                  <span className={`px-3 py-1 rounded-full text-sm ${balance.estadoClass}`}>
                    {balance.estado}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Botón de cerrar balance */}
      <div className="mt-6">
        <button
          onClick={handleClose} // Llama a la función que redirige a la ruta cerrar-balance
          className="px-6 py-2 text-white bg-red-600 rounded-md hover:bg-red-500 transition-colors"
        >
          Cerrar Balance
        </button>
      </div>
    </div>
  );
};

export default Balance;
