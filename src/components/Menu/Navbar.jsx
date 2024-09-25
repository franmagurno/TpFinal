import React from "react";
import { Menu } from "@headlessui/react";
import { BellIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate(); // Hook para navegar entre páginas

  return (
    <nav className="bg-gray-50 shadow-md">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Aquí puedes agregar un logo u otro contenido en el centro si es necesario */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            {/* Si necesitas un logo, agrégalo aquí */}
          </div>

          {/* Botón de notificaciones (opcional) */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="rounded-full bg-gray-50 p-1 text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              <span className="sr-only">Ver notificaciones</span>
              <BellIcon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Dropdown del perfil */}
            <Menu as="div" className="relative ml-3">
              <div>
                <Menu.Button className="flex rounded-full bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300">
                  <span className="sr-only">Abrir menú de usuario</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="Usuario"
                  />
                </Menu.Button>
              </div>
              <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => navigate("/user-profile")}
                      className={`block px-4 py-2 text-sm text-gray-700 ${
                        active ? "bg-gray-200" : ""
                      }`}
                    >
                      Tu Perfil
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => navigate("/configuraciones")}
                      className={`block px-4 py-2 text-sm text-gray-700 ${
                        active ? "bg-gray-200" : ""
                      }`}
                    >
                      Configuraciones
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => navigate("/")}
                      className={`block px-4 py-2 text-sm text-gray-700 ${
                        active ? "bg-gray-200" : ""
                      }`}
                    >
                      Cerrar Sesión
                    </button>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Menu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
