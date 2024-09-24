import React from 'react';
import { useNavigate } from 'react-router-dom';  // Importar useNavigate

const CTA = () => {
    const navigate = useNavigate();
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
                <h2 className="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
                    Simplifique sus finanzas, <span className="text-blue-500"> Fortalece tu grupo.</span>
                </h2>

                <p className="max-w-4xl mt-6 text-center text-gray-500 dark:text-gray-300">
                    SliceTicket simplifica el proceso de gestión de gastos compartidos al permitirle cargar recibos de compra,
                    calcular automáticamente la contribución de cada miembro del grupo y mantener a todos en sintonía con
                    desgloses financieros transparentes. Perfecto para equipos, compañeros de cuarto o amigos que dividen
                    costos, SliceTicket garantiza que todos paguen su parte justa, sin complicaciones.
                </p>

                <div className="inline-flex w-full mt-6 sm:w-auto">
                    <button 
                        onClick={() => navigate('/signup')}
                        className="inline-flex items-center justify-center w-full px-6 py-2 text-white duration-300 bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                    >
                        Sign Up
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CTA;

