import React from 'react';
import { Navigate } from 'react-router-dom';

const Autenticacao = ({ children }) => {
  // Recupera os dados do usuário no localStorage
  const usuario = localStorage.getItem("usuario");

  // Verifica se o valor existe e se é um JSON válido
  let dadosUsuario = null;
  try {
    dadosUsuario = usuario ? JSON.parse(usuario) : null;
  } catch (error) {
    console.error("Erro ao analisar o JSON do usuário:", error);
    dadosUsuario = null; // Garante que não haja falhas
  }

  // Se o usuário não estiver autenticado, redireciona para o login
  if (!dadosUsuario) {
    return <Navigate to="/" replace />;
  }

  // Caso o usuário esteja autenticado, renderiza os filhos da rota
  return children;
};

export default Autenticacao;
