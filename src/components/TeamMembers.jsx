import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Balance from './Balance';
import TableWithFooter from './TableWithFooter ';

const TeamMembersComponent = () => {
    const [members, setMembers] = useState([
        {
            nombre: "Franco Magurno",
            email: "francomagurno@gmail.com",
        },
        {
            nombre: "Tomas Machuca",
            email: "tomasmachuca@gmail.com",
        },
        {
            nombre: "Marco Riccitelli",
            email: "marcoriccitelli@gmail.com",
        },
    ]);

    const [activeTab, setActiveTab] = useState('members'); // Estado para manejar la pestaña activa
    const navigate = useNavigate(); // Hook de navegación para redirigir
    const location = useLocation(); // Hook para recibir datos de navegación

    // Al montar el componente, agregar los nuevos miembros si existen
    useEffect(() => {
        if (location.state && location.state.newMembers) {
            const uniqueNewMembers = location.state.newMembers.filter(
                (newMember) => !members.some((member) => member.email === newMember.email)
            );
            setMembers((prevMembers) => [...prevMembers, ...uniqueNewMembers]);
        }
    }, [location.state, members]);

    // Función para eliminar un miembro por su índice
    const handleDelete = (index) => {
        const updatedMembers = members.filter((_, i) => i !== index);
        setMembers(updatedMembers);
    };

    // Función para manejar la redirección a la página de agregar miembros
    const handleAddMember = () => {
        navigate('/add-members'); // Redirige a la página de agregar miembros
    };

    // Función para manejar la redirección a la página de agregar ticket
    const handleAddTicket = () => {
        navigate('/charge-ticket'); // Redirige a la página de agregar ticket
    };

    // Función para manejar la redirección al menú
    const handleGoToMenu = () => {
        navigate('/menu'); // Redirige al menú
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            {/* Menu Navigation */}
            <header className="bg-white shadow-md">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="text-2xl font-semibold text-blue-600">SliceTicket</div>
                    <nav className="flex space-x-8">
                        <button
                            onClick={handleGoToMenu}
                            className="text-gray-700 hover:text-blue-500"
                        >
                            Menu
                        </button>
                    </nav>
                </div>
            </header>

            {/* Contenido principal */}
            <section className="container mx-auto px-4 py-6">
                {/* Pestañas */}
                <div className="mb-6 md:flex md:items-center md:justify-between">
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
                            {/* Título, subtítulo y botón "Agregar Miembro" en la parte superior derecha */} 
                            <div className="flex justify-between items-center mb-6">
                                <div className="flex items-center">
                                    <h2 className="text-3xl font-bold text-gray-800 dark:text-black">Miembros</h2>
                                    {/* Aquí implemento el diseño similar al de la imagen */}
                                    <span className="ml-4 bg-gray-900 text-blue-400 text-sm font-bold px-2 py-1 rounded-full">
                                        {members.length} Grupos
                                    </span>
                                </div>
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
                            </div>

                            {/* Tabla de miembros */}
                            <div className="container mx-auto p-4">
                                <div className="overflow-x-auto">
                                    <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                                        <thead>
                                            <tr>
                                                <th className="p-4 text-left text-gray-700 font-semibold">Nombre</th>
                                                <th className="p-4 text-left text-gray-700 font-semibold">Email</th>
                                                <th className="p-4 text-left text-gray-700 font-semibold">Acción</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {members.map((member, index) => (
                                                <tr key={index} className="border-t">
                                                    <td className="p-4 text-gray-900">{member.nombre}</td>
                                                    <td className="p-4 text-gray-600">{member.email}</td>
                                                    <td className="p-4 text-gray-600">
                                                        <button
                                                            className="text-red-500 font-semibold hover:text-red-700 cursor-pointer"
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
                        </>
                    ) : activeTab === 'balance' || activeTab === 'Historial' ? (
                        <>
                            {/* Botón "Cargar Ticket" en la parte superior derecha, solo visible en Balance o Historial */}
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-xl font-semibold text-gray-800">{activeTab === 'balance' ? 'Balance' : 'Historial'}</h3>
                                <button
                                    onClick={handleAddTicket}
                                    className="flex items-center justify-center w-auto px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-green-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-green-600 dark:hover:bg-green-500 dark:bg-green-600"
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
                                    <span>Cargar Ticket</span>
                                </button>
                            </div>

                            {/* Balance o Historial */}
                            {activeTab === 'balance' ? <Balance /> : <TableWithFooter />}
                        </>
                    ) : null}
                </div>
            </section>
        </div>
    );
};

export default TeamMembersComponent;


