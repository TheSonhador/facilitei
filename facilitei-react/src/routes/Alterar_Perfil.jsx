import React, {useState} from "react";
import axios from 'axios';

const Alterar_Perfil = () => {
  // Gerenciando os estados para os campos editáveis,

  const usuario = localStorage.getItem("usuario");
  const dadosUsuario = JSON.parse(usuario);
  const [formData, setFormData] = useState({
    nome: dadosUsuario[0].nome,
    email: dadosUsuario[0].email,
  });

  // Atualizar o estado conforme o usuário edita os campos
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Função para remover a foto
  const handleRemovePhoto = () => {
    setFormData((prevData) => ({
      ...prevData,
      foto: "", // Limpa o caminho da foto
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita o recarregamento da página
    console.log("Dados enviados:", formData);
      const response = axios.put(`http://localhost:8000/api/usuarios/${dadosUsuario[0].id}`, {
        nome: formData.nome, // Envia o nome
        admin: 0, // Definindo como 0, você pode mudar conforme necessário
        pontuacao: 0, // Definindo a pontuação como 0, ajuste conforme necessário
        idade: 0, // Definindo a idade como 0, ajuste conforme necessário
        senha: formData.senha, // Envia a senha
        email: formData.email // Envia o e-mail
      });
    alert("Informações atualizadas com sucesso!");
  };
  
  return (
    <main>
      <div class="container">
        <section class="perfil-section">
          <header class="perfil-header">
            <h1 class="perfil-title">Editar informações do usuário</h1>
          </header>

          <form onSubmit={handleSubmit} className="perfil-content">
            <div className="dados-perfil">
              <div className="dados-usuario">
                <h2>Editar informações do usuário</h2>

                <div className="dados-gerais">
                    <label>
                        Nome:
                        <input type="text" name="name" value={formData.nome} onChange={handleChange} />
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" value={formData.email} onChange={handleChange} />
                    </label>
                    <label>
                        Senha:
                        <input type="password" name="senha" value={formData.senha} onChange={handleChange} />
                    </label>
                </div>
            </div>
            </div>
                <button type="submit" className="btn">
                  <span>Salvar informações</span>
                </button>
            </form>
        </section>
      </div>
    </main>
  );
};

export default Alterar_Perfil;