import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Balance from './Balance';
import TableWithFooter from './TableWithFooter ';
import Navbar from './Menu/Navbar';

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
    const [balanceCalculated, setBalanceCalculated] = useState(false); // Estado para mostrar o no el balance
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

        // Si la navegación viene de SettleBalanceComponent, mostramos la tabla
        if (location.state && location.state.balanceClosed) {
            setBalanceCalculated(true); // Mostramos el balance una vez cerrado
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

    // Redirigir a la página de cerrar balance (settle-balance)
    const handleSettleBalance = () => {
        navigate('/cerrar-balance'); // Redirige a SettleBalanceComponent en la ruta /cerrar-balance
    };

    // Función para redirigir a la página de Saldos
    const handleViewSaldo = () => {
        navigate('/saldo'); // Redirige a la ruta /saldo donde está la página de saldos
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            {/* Importar Navbar */}
            <Navbar />

            {/* Contenido principal */}
            <section className="container mx-auto px-4 py-6 mt-16">
                {/* Pestañas */}
                <div className="mb-6 md:flex md:items-center md:justify-between">
                    <div className="flex overflow-x-auto overflow-y-hidden border-b border-gray-200 whitespace-nowrap dark:border-gray-700">
                        <button
                            className={`inline-flex items-center h-10 px-4 -mb-px text-sm text-center ${activeTab === 'members' ? 'text-blue-600 border-blue-500 shadow-lg' : 'text-gray-700 border-transparent'} bg-transparent border-b-2 sm:text-base dark:text-black whitespace-nowrap focus:outline-none`}
                            onClick={() => setActiveTab('members')}
                        >
                            Miembros
                        </button>

                        <button
                            className={`inline-flex items-center h-10 px-4 -mb-px text-sm text-center ${activeTab === 'Historial' ? 'text-blue-600 border-blue-500 shadow-lg' : 'text-gray-700 border-transparent'} bg-transparent border-b-2 sm:text-base dark:text-black whitespace-nowrap focus:outline-none`}
                            onClick={() => setActiveTab('Historial')}
                        >
                            Historial
                        </button>

                        <button
                            className={`inline-flex items-center h-10 px-4 -mb-px text-sm text-center ${activeTab === 'balance' ? 'text-blue-600 border-blue-500 shadow-lg' : 'text-gray-700 border-transparent'} bg-transparent border-b-2 sm:text-base dark:text-black whitespace-nowrap focus:outline-none`}
                            onClick={() => setActiveTab('balance')}
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

                                {/* Botón "Ver Saldo" debajo de la tabla, visible solo si el balance ha sido calculado */}
                                {balanceCalculated && (
                                    <div className="flex justify-center mt-6">
                                        <button
                                            onClick={handleViewSaldo}
                                            className="px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors"
                                        >
                                            Ver Saldo
                                        </button>
                                    </div>
                                )}
                            </div>
                        </>
                    ) : activeTab === 'balance' || activeTab === 'Historial' ? (
                        <>
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-xl font-semibold text-gray-800">{activeTab === 'balance' ? 'Balance' : 'Historial'}</h3>

                                {activeTab === 'Historial' && (
                                    <button
                                        onClick={handleAddTicket} // Función para agregar tickets
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
                                        <span>Agregar Ticket</span>
                                    </button>
                                )}

                                {activeTab === 'balance' && !balanceCalculated && (
                                    <button
                                        onClick={handleSettleBalance}
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
                                        <span>Cerrar Balance</span>
                                    </button>
                                )}
                            </div>

                            {/* Mostrar la tabla de balance si se ha calculado */}
                            {activeTab === 'balance' && balanceCalculated && <Balance />}
                            {activeTab === 'Historial' && <TableWithFooter />}
                        </>
                    ) : null}
                </div>
            </section>
        </div>
    );
};

export default TeamMembersComponent;
