import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../modal.css";
import axios from 'axios';

const Perfil = ({
}) => {
  const navigate = useNavigate();
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isFinalConfirmation, setFinalConfirmation] = useState(false);

  const usuario = localStorage.getItem("usuario");
  const dadosUsuario = JSON.parse(usuario);
  console.log(dadosUsuario)

  const handleDeleteAccount = () => {

    const response = axios.delete(`http://localhost:8000/api/usuarios/${dadosUsuario[0].id}`, {
    });
    
    alert("Conta apagada com sucesso!");
    localStorage.removeItem("usuario");
    navigate('/home');
    // Lógica para apagar conta no servidor pode ser inserida aqui
  };

  const handleLogout = () => {
    // Remover os dados do usuário do localStorage
    localStorage.removeItem("usuario");

    // Redirecionar para a página de cadastro
    navigate("/");
  };
  
  return (
    <main>
      <div class="container">
        <section class="perfil-section">
          <header class="perfil-header">
            <h1 class="perfil-title">Configurações da conta</h1>
          </header>

          <div className="perfil-content">
            <div className="dados-perfil">
              <div className="dados-usuario">
                <h2>Dados do usuário</h2>

                <div className="dados-gerais">
                <p>Nome: {dadosUsuario[0].nome ? dadosUsuario[0].nome : dadosUsuario.nome}</p>
                <p>Email: {dadosUsuario[0].email ? dadosUsuario[0].email : dadosUsuario.email}</p>
                </div>

                <div className="options">
                  <button className="btn">
                    <span>
                      <a href="alterar">Alterar informações</a>
                    </span>
                  </button>

                  <button
                    className="btn delete"
                    onClick={() => setDeleteModalOpen(true)}
                  >
                    <span>Apagar conta</span>
                  </button>
                </div>
              </div>

              <div className="foto-perfil">

                <button className="btn" onClick={handleLogout}>
                  <span>
                    <a href="alterar" onClick={handleLogout}>
                      Sair da conta
                    </a>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Modal para confirmação de exclusão */}
      {isDeleteModalOpen && (
        <div className="modal">
          <div className="modal-content">
            {!isFinalConfirmation ? (
              <>
                <p>Tem certeza que deseja apagar sua conta?</p>
                <button
                  className="btn confirm"
                  onClick={() => setFinalConfirmation(true)}
                >
                  Sim, tenho certeza
                </button>
                <button
                  className="btn cancel"
                  onClick={() => setDeleteModalOpen(false)}
                >
                  Cancelar
                </button>
              </>
            ) : (
              <>
                <p>Esta ação é irreversível. Confirme novamente para apagar.</p>
                <button className="btn confirm" onClick={handleDeleteAccount}>
                  Confirmar exclusão
                </button>
                <button
                  className="btn cancel"
                  onClick={() => {
                    setFinalConfirmation(false);
                    setDeleteModalOpen(false);
                  }}
                >
                  Cancelar
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </main>
  );
};

export default Perfil;