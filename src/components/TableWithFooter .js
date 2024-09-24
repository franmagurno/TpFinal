import React from "react";

const products = [
  {
    nombre: "Tomas",
    producto: "Carne",
    cantidad: 1,
    precio: 999.99,
  },
  {
    nombre: "Marco",
    producto: "Fideos",
    cantidad: 2,
    precio: 199.99,
  },
  {
    nombre: "Chiche",
    producto: "Vodka",
    cantidad: 1,
    precio: 79.99,
  },
  {
    nombre: "Bauti",
    producto: "Coca",
    cantidad: 5,
    precio: 1290.99,
  },
];

export const TableWithFooter = () => {
  const totalQuantity = products.reduce((acc, product) => acc + product.cantidad, 0);
  const totalPrice = products.reduce((acc, product) => acc + product.precio * product.cantidad, 0).toFixed(2);

  return (
    <div className="container mx-auto p-4">
      {/* Título y descripción */}
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-gray-900">Resumen de Productos</h1>
        <p className="text-gray-600">Este es un listado de productos comprados con su cantidad y precio total.</p>
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
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className="border-t">
                <td className="p-4 text-gray-900">{product.nombre}</td>
                <td className="p-4 text-gray-600">{product.producto}</td>
                <td className="p-4 text-gray-600">{product.cantidad}</td>
                <td className="p-4 text-gray-600">${product.precio.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
          <tfoot className="bg-gray-100">
            <tr>
              <td className="p-4 font-semibold text-gray-900">Total</td>
              <td className="p-4"></td>
              <td className="p-4 font-semibold text-gray-900">{totalQuantity}</td>
              <td className="p-4 font-semibold text-gray-900">${totalPrice}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default TableWithFooter;

