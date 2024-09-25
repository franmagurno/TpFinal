import React, { useState } from "react";
import { FaTicketAlt } from "react-icons/fa"; // Importar el ícono de ticket
import ticketImage from '../Img/ticket.jpg'; // Asegúrate de que esta ruta esté bien

const products = [
  {
    nombre: "Tomas machuca",
    producto: "Carne",
    cantidad: 1,
    precio: 999.99,
    ticket: ticketImage, // Usa la imagen local para el ticket
  },
  {
    nombre: "Marco riccitelli",
    producto: "Fideos",
    cantidad: 2,
    precio: 199.99,
    ticket: ticketImage, // URL de la imagen del ticket
  },
  {
    nombre: "Franco magurno",
    producto: "Vodka",
    cantidad: 1,
    precio: 79.99,
    ticket: ticketImage,
  },
];

export const TableWithFooter = () => {
  const [selectedTicket, setSelectedTicket] = useState(null); // Estado para mostrar el ticket seleccionado

  const totalQuantity = products.reduce((acc, product) => acc + product.cantidad, 0);
  const totalPrice = products.reduce((acc, product) => acc + product.precio * product.cantidad, 0).toFixed(2);

  const handleCloseModal = () => {
    setSelectedTicket(null); // Cierra el modal al hacer clic en la X o fuera de la imagen
  };

  return (
    <div className="container mx-auto p-4">
      {/* Título y descripción */}
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-gray-900">Resumen de Productos</h1>
        <p className="text-gray-600">
          Este es un listado de productos comprados con su cantidad, precio total y foto del ticket correspondiente.
        </p>
      </div>

      {/* Tabla de productos */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr>
              <th className="p-4 text-left text-gray-700 font-semibold">Nombre</th>
              <th className="p-4 text-left text-gray-700 font-semibold">Producto</th>
              <th className="p-4 text-left text-gray-700 font-semibold">Cantidad</th>
              <th className="p-4 text-left text-gray-700 font-semibold">Precio</th>
              <th className="p-4 text-left text-gray-700 font-semibold">Ticket</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className="border-t">
                <td className="p-4 text-gray-900">{product.nombre}</td>
                <td className="p-4 text-gray-600">{product.producto}</td>
                <td className="p-4 text-gray-600">{product.cantidad}</td>
                <td className="p-4 text-gray-600">${product.precio.toFixed(2)}</td>
                <td className="p-4 text-gray-600">
                  <FaTicketAlt
                    className="text-blue-500 cursor-pointer w-6 h-6"
                    onClick={() => setSelectedTicket(product.ticket)} // Al hacer clic en el icono, muestra la imagen del ticket
                  />
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot className="bg-gray-100">
            <tr>
              <td className="p-4 font-semibold text-gray-900">Total</td>
              <td className="p-4"></td>
              <td className="p-4 font-semibold text-gray-900">{totalQuantity}</td>
              <td className="p-4 font-semibold text-gray-900">${totalPrice}</td>
              <td className="p-4"></td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Modal para mostrar el ticket seleccionado */}
      {selectedTicket && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={handleCloseModal}
        >
          <div className="relative">
            <img src={selectedTicket} alt="Ticket" className="max-w-lg rounded-lg shadow-lg" />
            <button
              className="absolute top-2 right-2 text-white text-2xl"
              onClick={handleCloseModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TableWithFooter;
