import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate

const CustomersComponent = () => {
  const navigate = useNavigate(); // Inicializar el hook de navegación

  const customers = [
    {
      company: "Catalog",
      website: "catalogapp.io",
      status: "Customer",
      about: "Content curating app",
      description: "Brings all your news into one place",
      users: 4,
      licenseUse: 66,
      images: [
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1256&q=80",
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      ],
    },
    {
        company: "grupo de la costa",
        website: "catalogapp.io",
        status: "Customer",
        about: "vacaciones 2025",
        description: "Brings all your news into one place",
        users: 5,
        licenseUse: 66,
        images: [
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1256&q=80",
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
        ],
      },
    // Otros objetos customer aquí...
  ];

  // Función para redirigir a la página de crear grupo
  const handleAddGroup = () => {
    navigate('/create-group'); // Redirigir a la página de creación de grupo
  };

  // Función para redirigir a la página de Team Members de un grupo específico
  const handleTeamMembersRedirect = (groupName) => {
    navigate('/team-members', { state: { groupName } }); // Pasar el nombre del grupo como estado
  };

  return (
    <section className="bg-white min-h-screen flex justify-center items-start md:pl-64 mt-16"> {/* Añadido mt-16 */}
      <div className="container mx-auto px-4 py-10 bg-white">
        <div className="sm:flex sm:items-center sm:justify-between mb-6">
          <div>
            <div className="flex items-center gap-x-3">
              <h2 className="text-lg font-medium text-gray-800">Grupos</h2>
              <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full">
                {customers.length} Grupos
              </span>
            </div>
          </div>

          {/* Barra de búsqueda y botón de agregar grupo */}
          <div className="flex items-center gap-x-3 mt-4 sm:mt-0">
            {/* Barra de búsqueda */}
            <div className="relative w-full max-w-xs sm:max-w-md">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m1.65-5.65a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Buscar Grupo"
                className="block w-full pl-10 pr-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-lg focus:border-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-40"
              />
            </div>

            {/* Botón para agregar grupo */}
            <button
              onClick={handleAddGroup}
              className="flex items-center justify-center w-auto px-4 py-1.5 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg gap-x-2 hover:bg-blue-600"
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
              <div className="overflow-hidden border border-gray-200 rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="py-2 px-2 text-xs sm:text-sm font-normal text-left text-gray-500">
                        Nombre
                      </th>
                      <th scope="col" className="px-2 sm:px-6 py-2 text-xs sm:text-sm font-normal text-left text-gray-500">
                        Balance
                      </th>
                      <th scope="col" className="px-2 sm:px-2 py-2 text-xs sm:text-sm font-normal text-left text-gray-500">
                        Descripción
                      </th>
                      <th scope="col" className="px-2 sm:px-2 py-2 text-xs sm:text-sm font-normal text-left text-gray-500">
                        Usuarios
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {customers.map((customer, index) => (
                      <tr key={index}>
                        <td
                          className="px-2 py-2 text-xs sm:text-sm font-medium whitespace-nowrap text-blue-500 cursor-pointer hover:underline"
                          onClick={() => handleTeamMembersRedirect(customer.company)}
                        >
                          <div>
                            <h2 className="font-medium text-gray-800">{customer.company}</h2>
                            <p className="text-xs sm:text-sm font-normal text-gray-600">{customer.website}</p>
                          </div>
                        </td>
                        <td className="px-2 py-2 text-xs sm:text-sm font-medium whitespace-nowrap">
                          <div className="inline px-2 py-1 text-xs sm:text-sm font-normal rounded-full text-emerald-500 bg-emerald-100/60">
                            {customer.status}
                          </div>
                        </td>
                        <td className="px-2 py-2 text-xs sm:text-sm whitespace-nowrap">
                          <div>
                            <h4 className="text-gray-700">{customer.about}</h4>
                            <p className="text-gray-500">{customer.description}</p>
                          </div>
                        </td>
                        <td className="px-2 py-2 text-xs sm:text-sm whitespace-nowrap">
                          <div className="flex items-center">
                            {customer.images.slice(0, 3).map((img, idx) => (
                              <img key={idx} className="object-cover w-5 h-5 -mx-1 border-2 border-white rounded-full" src={img} alt={`user-${idx}`} />
                            ))}
                            <p className="flex items-center justify-center w-5 h-5 -mx-1 text-xs text-blue-600 bg-blue-100 border-2 border-white rounded-full">
                              +{customer.users - 3}
                            </p>
                          </div>
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




