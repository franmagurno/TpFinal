import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CustomersComponent = () => {
  const [customers, setCustomers] = useState([]);
  const navigate = useNavigate();

  // Al cargar el componente, obtener los grupos almacenados en localStorage
  useEffect(() => {
    const savedGroups = JSON.parse(localStorage.getItem('groups')) || [];
    setCustomers(savedGroups);
  }, []);

  // Función para redirigir a la página de crear grupo
  const handleAddGroup = () => {
    navigate('/create-group');
  };

  // Función para eliminar un grupo
  const handleDeleteGroup = (index) => {
    const confirmDelete = window.confirm("¿Estás seguro de que quieres eliminar este grupo?");
    if (confirmDelete) {
      const updatedCustomers = [...customers];
      updatedCustomers.splice(index, 1);
      setCustomers(updatedCustomers);
      localStorage.setItem('groups', JSON.stringify(updatedCustomers)); // Actualizar localStorage
    }
  };

  // Función para redirigir a la página de Team Members de un grupo específico
  const handleTeamMembersRedirect = (groupName) => {
    navigate('/team-members', { state: { groupName } });
  };

  return (
    <section className="bg-white min-h-screen flex justify-center items-start md:pl-64">
      <div className="container mx-auto px-4 py-10 bg-white">
        <div className="sm:flex sm:items-center sm:justify-between mb-6">
          <div>
            <div className="flex items-center gap-x-3">
              <h2 className="text-lg font-medium text-gray-800 dark:text-black">Grupos</h2>
              <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
                {customers.length} Grupos
              </span>
            </div>
          </div>

          {/* Botón para agregar grupo */}
          <div className="flex items-center gap-x-3 mt-4 sm:mt-0">
            <button
              onClick={handleAddGroup}
              className="flex items-center justify-center w-auto px-4 py-1.5 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg gap-x-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Agregar Grupo</span>
            </button>
          </div>
        </div>

        {/* Tabla de grupos */}
        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th scope="col" className="py-2 px-2 sm:px-2 text-xs sm:text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        Nombre
                      </th>
                      <th scope="col" className="px-2 sm:px-2 py-2 text-xs sm:text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        Descripción
                      </th>
                      <th scope="col" className="px-2 sm:px-2 py-2 text-xs sm:text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        Usuarios
                      </th>
                      <th scope="col" className="px-2 sm:px-2 py-2 text-xs sm:text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        Acción
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    {customers.map((customer, index) => (
                      <tr key={index}>
                        <td
                          className="px-2 sm:px-2 py-2 text-xs sm:text-sm font-medium whitespace-nowrap text-blue-500 cursor-pointer hover:underline"
                          onClick={() => handleTeamMembersRedirect(customer.company)}
                        >
                          <div>
                            <h2 className="font-medium text-gray-800 dark:text-white">{customer.company}</h2>
                          </div>
                        </td>
                        <td className="px-2 sm:px-2 py-2 text-xs sm:text-sm whitespace-nowrap">
                          <div>
                            <h4 className="text-gray-700 dark:text-gray-200">{customer.about}</h4>
                          </div>
                        </td>
                        <td className="px-2 sm:px-2 py-2 text-xs sm:text-sm whitespace-nowrap">
                          {customer.users}
                        </td>
                        <td className="px-2 sm:px-2 py-2 text-xs sm:text-sm whitespace-nowrap">
                          <button
                            className="text-red-500 hover:text-red-700"
                            onClick={() => handleDeleteGroup(index)} // Eliminar grupo
                          >
                            Eliminar
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomersComponent;
