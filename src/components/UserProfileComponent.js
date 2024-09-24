import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Hook para navegar

const UserProfileComponent = () => {
  const [userName, setUserName] = useState('Juan Pérez');
  const [email, setEmail] = useState('juan.perez@example.com');
  const [profilePicture, setProfilePicture] = useState('https://via.placeholder.com/150');
  
  // Estados para manejar el modo de edición
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);

  // Hook para navegación
  const navigate = useNavigate();

  // Función para manejar el cambio de imagen de perfil
  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfilePicture(imageUrl);
    }
  };

  // Función para manejar la eliminación de la cuenta
  const handleDeleteAccount = () => {
    alert('Cuenta eliminada');
  };

  // Función para regresar al menú
  const handleGoToMenu = () => {
    navigate('/menu');
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-10">
      <div className="p-4">
        {/* Título del perfil centrado */}
        <div className="flex justify-center items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800 text-center">Tu Perfil</h1>
        </div>

        <div className="flex flex-col items-center">
          {/* Foto de perfil */}
          <div className="relative mb-4">
            <img
              src={profilePicture}
              alt="Foto de perfil"
              className="w-32 h-32 rounded-full object-cover border-2 border-gray-300"
            />
            <label htmlFor="file-upload" className="absolute bottom-0 right-0 bg-blue-600 text-white p-1 rounded-full cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15.232 5.232l3.536 3.536M9 11l3.232 3.232M7.5 3h4.586l1 1h2.828L19.5 7v2.828l-3.5 3.5v4.586l-1 1H7.5v-4.586L3.5 10.5V7h4.586l3-3z"
                />
              </svg>
            </label>
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleProfilePictureChange}
            />
          </div>

          {/* Sección del nombre de usuario */}
          <div className="w-full px-4 mb-4">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium text-gray-700">Nombre de Usuario</label>
              {isEditingName ? (
                <button
                  onClick={() => setIsEditingName(false)}
                  className="text-blue-500 hover:underline text-sm"
                >
                  Guardar
                </button>
              ) : (
                <button
                  onClick={() => setIsEditingName(true)}
                  className="text-blue-500 hover:underline text-sm"
                >
                  Editar
                </button>
              )}
            </div>
            {isEditingName ? (
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            ) : (
              <p className="mt-2 text-sm text-gray-800">{userName}</p>
            )}
          </div>

          {/* Sección del correo electrónico */}
          <div className="w-full px-4 mb-4">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium text-gray-700">Correo Electrónico</label>
              {isEditingEmail ? (
                <button
                  onClick={() => setIsEditingEmail(false)}
                  className="text-blue-500 hover:underline text-sm"
                >
                  Guardar
                </button>
              ) : (
                <button
                  onClick={() => setIsEditingEmail(true)}
                  className="text-blue-500 hover:underline text-sm"
                >
                  Editar
                </button>
              )}
            </div>
            {isEditingEmail ? (
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            ) : (
              <p className="mt-2 text-sm text-gray-800">{email}</p>
            )}
          </div>

          {/* Botones de eliminar cuenta y regresar al menú */}
          <div className="mt-6 w-full flex justify-around">
            <button
              onClick={handleDeleteAccount}
              className="px-4 py-2 bg-red-600 text-white text-sm font-semibold rounded-md hover:bg-red-500 focus:outline-none"
            >
              Eliminar Cuenta
            </button>
            <button
              onClick={handleGoToMenu}
              className="px-4 py-2 bg-gray-600 text-white text-sm font-semibold rounded-md hover:bg-gray-500 focus:outline-none"
            >
              Regresar al Menú
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileComponent;

