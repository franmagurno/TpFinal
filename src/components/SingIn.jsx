import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Importamos Link

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // Para manejar mensajes de error
  const navigate = useNavigate(); // Hook para redireccionar

  // Validación simple de email
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para verificar formato de email
    return re.test(String(email).toLowerCase());
  };

  // Función de validación simple
  const handleSignIn = (e) => {
    e.preventDefault();

    // Validar que el email tenga el formato correcto
    if (!validateEmail(email)) {
      setError('Por favor, ingrese un email válido.');
      return;
    }

    // Validar que la contraseña no esté vacía
    if (!password) {
      setError('Por favor, ingrese una contraseña.');
      return;
    }

    // Si pasa las validaciones, redirigir al menú (simulando autenticación exitosa)
    setError(''); // Limpiar errores si todo está bien
    navigate('/menu'); // Redirigir al menú
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-sm p-6 m-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="flex justify-center mx-auto">
          <img className="w-auto h-7 sm:h-8" src="https://merakiui.com/images/logo.svg" alt="Logo" />
        </div>

        <form className="mt-6" onSubmit={handleSignIn}>
          <div>
            <label htmlFor="email" className="block text-sm text-gray-800 dark:text-gray-200">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mt-4">
            <label htmlFor="password" className="block text-sm text-gray-800 dark:text-gray-200">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          {/* Mostrar error si hay alguno */}
          {error && (
            <div className="mt-2 text-red-600 text-sm">
              {error}
            </div>
          )}

          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
            >
              Sign In
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-400">
          Don't have an account? <Link to="/signup" className="font-medium text-gray-700 dark:text-gray-200 hover:underline">Create One</Link> {/* Aquí usamos Link */}
        </p>
      </div>
    </div>
  );
};

export default SignIn;
