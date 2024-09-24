import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="container p-6 mx-auto">
        <div className="lg:flex">
          {/* Logo and description section */}
          <div className="w-full -mx-6 lg:w-2/5">
            <div className="px-6">
              <a href="#">
                <img
                  className="w-auto h-7"
                  src="https://merakiui.com/images/full-logo.svg"
                  alt="Brand Logo"
                />
              </a>

              <p className="max-w-sm mt-2 text-gray-500 dark:text-gray-400">
                Únete a miles de usuarios y no te pierdas los nuevos tutoriales y tips que ofrecemos.
              </p>

              <div className="flex mt-6 -mx-2">
                <a
                  href="#"
                  className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                  aria-label="Reddit"
                >
                  {/* Replace with appropriate icons */}
                  <svg
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Icon */}
                  </svg>
                </a>

                <a
                  href="#"
                  className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                  aria-label="Facebook"
                >
                  {/* Facebook Icon */}
                  <svg
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Icon */}
                  </svg>
                </a>

                <a
                  href="#"
                  className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                  aria-label="Github"
                >
                  {/* Github Icon */}
                  <svg
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Icon */}
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Links section */}
          <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">Sobre nosotros</h3>
                <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                  La empresa
                </a>
                <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                  Comunidad
                </a>
                <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                  Carreras
                </a>
              </div>

              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">Blog</h3>
                <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                  Tecnología
                </a>
                <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                  Música
                </a>
                <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                  Videos
                </a>
              </div>

              

              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">Contacto</h3>
                <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                  +1 526 654 8965
                </span>
                <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                  SlideTicket@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <hr className="h-px my-6 bg-gray-200 border-none dark:bg-gray-700" />

        <div>
          <p className="text-center text-gray-500 dark:text-gray-400">
            © SlideTicket 2024 - Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
