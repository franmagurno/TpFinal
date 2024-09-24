import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate para la navegación
import TableWithFooter from './TableWithFooter ';
import Balance from './Balance';

const TeamMembersComponent = () => {
    const [members, setMembers] = useState([
        {
            name: "Arthur Melo",
            email: "arthur.melo@example.com",
            status: "Active",
            image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        },
        {
            name: "John Doe",
            email: "john.doe@example.com",
            status: "Inactive",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
        },
        {
            name: "Jane Smith",
            email: "jane.smith@example.com",
            status: "Active",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1256&q=80",
        },
    ]);

    const [activeTab, setActiveTab] = useState('members'); // Estado para manejar la pestaña activa
    const navigate = useNavigate(); // Hook de navegación para redirigir

    // Función para eliminar un miembro por su índice
    const handleDelete = (index) => {
        const newMembers = members.filter((_, i) => i !== index);
        setMembers(newMembers);
    };

    // Función para manejar la redirección a la página de agregar miembros
    const handleAddMember = () => {
        navigate('/add-members'); // Redirige a la página de agregar miembros
    };

    // Función para manejar la redirección al menú
    const handleGoToMenu = () => {
        navigate('/menu'); // Redirige al menú
    };

    return (
        <section className="container px-4 mx-auto">
            {/* Título y botones siempre visibles */}
            <div className="sm:flex sm:items-center sm:justify-between">
                <div>
                    <div className="flex items-center gap-x-3">
                        <h2 className="text-lg font-medium text-gray-800 dark:text-black">Miembros</h2>
                        <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
                            {members.length} miembros
                        </span>
                    </div>
                    <p className="mt-1 text-sm text-gray-800 dark:text-black-300">
                        Estos son los miembros de tu Grupo.
                    </p>
                </div>

                <div className="flex items-center gap-x-3">
                    <button
                        onClick={handleAddMember}
                        className="flex items-center justify-center w-auto px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Agregar Miembro</span>
                    </button>

                    <button
                        onClick={handleGoToMenu}
                        className="flex items-center justify-center w-auto px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-gray-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-gray-600 dark:hover:bg-gray-500 dark:bg-gray-600"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-3A2.25 2.25 0 008.25 5.25V9m-3 0v9.75A2.25 2.25 0 007.5 21h9a2.25 2.25 0 002.25-2.25V9m-12 0h12" />
                        </svg>
                        <span>Volver al Menú</span>
                    </button>
                </div>
            </div>

            {/* Pestañas */}
            <div className="mt-6 md:flex md:items-center md:justify-between">
                <div className="flex overflow-x-auto overflow-y-hidden border-b border-gray-200 whitespace-nowrap dark:border-gray-700">
                    <button
                        className={`inline-flex items-center h-10 px-4 -mb-px text-sm text-center ${activeTab === 'members' ? 'text-blue-600 border-blue-500' : 'text-gray-700 border-transparent'} bg-transparent border-b-2 sm:text-base dark:text-black whitespace-nowrap focus:outline-none`}
                        onClick={() => setActiveTab('members')}
                    >
                        Miembros
                    </button>

                    <button
                        className={`inline-flex items-center h-10 px-4 -mb-px text-sm text-center ${activeTab === 'Historial' ? 'text-blue-600 border-blue-500' : 'text-gray-700 border-transparent'} bg-transparent border-b-2 sm:text-base dark:text-black whitespace-nowrap focus:outline-none`}
                        onClick={() => setActiveTab('Historial')}
                    >
                        Historial
                    </button>
                    
                    <button
                        className={`inline-flex items-center h-10 px-4 -mb-px text-sm text-center ${activeTab === 'balance' ? 'text-blue-600 border-blue-500' : 'text-gray-700 border-transparent'} bg-transparent border-b-2 sm:text-base dark:text-black whitespace-nowrap focus:outline-none`}
                        onClick={() => setActiveTab('balance')} // Cambia a la pestaña de Balance
                    >
                        Balance
                    </button>
                </div>
            </div>

            {/* Contenido de la pestaña */}
            <div className="mt-6">
                {activeTab === 'members' ? (
                    <>
                        <div className="flex items-center gap-x-3">
                            <h2 className="text-lg font-medium text-gray-800 dark:text-white">Lista de miembros</h2>
                        </div>

                        <div className="flex flex-col mt-6">
                            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                    <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                            <thead className="bg-gray-50 dark:bg-gray-800">
                                                <tr>
                                                    <th
                                                        scope="col"
                                                        className="py-3.5 px-2 sm:px-4 text-xs sm:text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                                                    >
                                                        Nombre
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-2 sm:px-4 py-3.5 text-xs sm:text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                                                    >
                                                        Email
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-2 sm:px-4 py-3.5 text-xs sm:text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                                                    >
                                                        Acción
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                                {members.map((member, index) => (
                                                    <tr key={index}>
                                                        <td className="px-2 sm:px-4 py-4 text-sm font-medium text-gray-800 dark:text-white whitespace-nowrap">
                                                            {member.name}
                                                        </td>
                                                        <td className="px-2 sm:px-4 py-4 text-sm text-gray-800 dark:text-white whitespace-nowrap">
                                                            {member.email}
                                                        </td>
                                                        <td className="px-2 sm:px-4 py-4 text-sm whitespace-nowrap">
                                                            <button
                                                                className="text-red-500 hover:text-red-700"
                                                                onClick={() => handleDelete(index)}
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
                    </>
                ) : activeTab === 'balance' ? (
                    <Balance />
                ) : (
                    <TableWithFooter />
                )}
            </div>
        </section>
    );
};

export default TeamMembersComponent;



