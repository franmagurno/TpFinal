import React from 'react';
import { Disclosure, Menu } from '@headlessui/react';
import { BellIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate para navegar entre páginas

export default function Example() {
  const navigate = useNavigate(); // Inicializa useNavigate para navegar

  return (
    <Disclosure as="nav" className="bg-white dark:bg-gray-900">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-500 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              {/* Central "Menu" Text */}
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <h1 className="text-gray-800 dark:text-white text-lg sm:text-2xl font-bold">Menu</h1>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Notification button */}
                <button
                  type="button"
                  className="rounded-full bg-white dark:bg-gray-900 p-1 text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-white dark:bg-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white dark:bg-gray-900 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          onClick={() => navigate('/user-profile')} // Redirige al perfil del usuario
                          className={`block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 ${active ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
                        >
                          Tu Perfil
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={`block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 ${active ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
                        >
                          Configuraciones
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          onClick={() => navigate('/')} // Redirige a la página de inicio (Landing Page)
                          className={`block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 ${active ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
                        >
                          Cerrar Sesión
                        </a>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            {/* Mobile menu */}
            <div className="space-y-1 px-2 pt-2 pb-3">
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 bg-gray-100 dark:text-gray-200 dark:bg-gray-800"
              >
                Dashboard
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200"
              >
                Team
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200"
              >
                Projects
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200"
              >
                Calendar
              </a>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}



