import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const AddMembers = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentMembers = location.state?.currentMembers || [];

  const [newMembers, setNewMembers] = useState([{ name: '', email: '' }]);
  const [error, setError] = useState('');

  // Validar formato de email
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleAddMember = () => {
    setNewMembers([...newMembers, { name: '', email: '' }]);
  };

  const handleRemoveMember = (index) => {
    const updatedMembers = [...newMembers];
    updatedMembers.splice(index, 1);
    setNewMembers(updatedMembers);
  };

  const handleMemberChange = (index, field, value) => {
    const updatedMembers = [...newMembers];
    updatedMembers[index][field] = value;
    setNewMembers(updatedMembers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar que todos los correos sean válidos y que los nombres no estén vacíos
    const hasErrors = newMembers.some(
      (member) => !validateEmail(member.email) || member.name.trim() === ''
    );

    if (hasErrors) {
      setError('Todos los miembros deben tener un nombre y un email válido.');
      return;
    }

    // Enviar los miembros agregados junto con los actuales
    navigate('/team-members', {
      state: { newMembers: [...currentMembers, ...newMembers] },
    });
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-4 mt-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Agregar Miembros</h2>
      {error && <p className="text-red-500 mb-2 text-sm">{error}</p>}
      <form onSubmit={handleSubmit}>
        {newMembers.map((member, index) => (
          <div key={index} className="mb-3">
            <input
              type="text"
              value={member.name}
              onChange={(e) => handleMemberChange(index, 'name', e.target.value)}
              className="block w-full px-2 py-1 mb-2 border rounded-md text-sm"
              placeholder={`Nombre del Miembro ${index + 1}`}
            />
            <input
              type="email"
              value={member.email}
              onChange={(e) => handleMemberChange(index, 'email', e.target.value)}
              className="block w-full px-2 py-1 border rounded-md text-sm"
              placeholder={`Email del Miembro ${index + 1}`}
            />
            <button
              type="button"
              onClick={() => handleRemoveMember(index)}
              className="text-red-500 text-sm mt-2"
            >
              Eliminar
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddMember}
          className="text-blue-500 text-sm mb-4"
        >
          Agregar Miembro
        </button>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-1 rounded-md hover:bg-blue-600 transition duration-150 text-sm"
        >
          Guardar Miembros
        </button>
      </form>
    </div>
  );
};

export default AddMembers;
