import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remover os dados do usuário do localStorage
    localStorage.removeItem('token'); // Substitua 'token' pelo nome da chave usada no armazenamento
    localStorage.removeItem('user');  // Se você armazena mais informações, remova-as também

    // Redirecionar para a página de cadastro
    navigate('/');
  };

  return (
    <button onClick={handleLogout} className="btn-logout">
      Sair
    </button>
  );
};

export default Logout;