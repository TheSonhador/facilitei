import React, { useState } from 'react';
import axios from 'axios'; // Certifique-se de importar o axios
import { useNavigate } from 'react-router-dom'; // Importando o useNavigate
import logo from '../assets/img/logo.png';
//import GoogleLogin from 'react-google-login';
import { GoogleLogin } from '@react-oauth/google';

const Login = () => {
  // Criando estados para os dados do formulário
  const [email2, setEmail2] = useState('');
  const [senha2, setSenha2] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // Para exibir erros, se necessário
  const navigate = useNavigate(); // Hook para navegação após login

  const handleLogin = async (e) => {
    e.preventDefault(); // Evita o recarregamento da página ao enviar o formulário

    try {
      // Fazendo a requisição POST para autenticar
      const response = await axios.post("http://localhost:8000/api/usuarios/autenticar", {
        email: email2,
        senha: senha2,
      });

      //console.log(response.data[0].senha);
      // Verifica se a autenticação foi bem-sucedida
      if (response.data && response.data[0].senha == senha2) {
        // Salva os dados do usuário no localStorage
        localStorage.setItem("usuario", JSON.stringify(response.data));

        // Redireciona para a página principal
        navigate('/home');
      } else {
        setErrorMessage("Credenciais inválidas. Verifique o e-mail e a senha.");
      }
    } catch (error) {
      console.error("Erro ao autenticar:", error);
      setErrorMessage("Erro ao tentar fazer login. Tente novamente mais tarde.");
    }
  };

  const responseGoogle = async (credentialResponse) => {
    try {
        const { credential } = credentialResponse;

        // Enviar o token para o backend para validação
        const response = await axios.post('http://localhost:8000/api/auth/google', { token: credential });

        // Salvar as informações do usuário
        const user = response.data.user;

        const userInfo = JSON.parse(atob(credential.split(".")[1]));
        console.log(userInfo); // Exibe as informações do usuário no console

        const { name, email, picture } = userInfo;

        // Armazenar as informações do usuário no localStorage
        localStorage.setItem("nome", name);
        localStorage.setItem("email", email);
        localStorage.setItem("imageUrl", picture);
        
        console.log(response.data.user);
        localStorage.setItem('usuario', JSON.stringify(user));
        navigate('/home');
    } catch (error) {
        console.error('Erro ao autenticar com o Google:', error);
    }
};

  return (
    <main className='section-auth'>
      <div className='intro-section'>
        <div className='content-intro-section'>
          <img className="logo" src={logo} width="350px" alt="Logo" />
          <p id='text-intro'>Bem-vindo! Faça seu login para uma melhor experiência.</p>
          <p>Ainda não tem uma conta? <a href='cadastro'>Cadastrar-se</a></p>
        </div>
      </div>

      <div className='auth-section'>
        <h2>Login</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <form onSubmit={handleLogin}>
          <label>
            Email:
            <div className="input-container">
              <i className="far fa-envelope"></i>
              <input
                type="email"
                name="email"
                placeholder="Seu email"
                value={email2}
                onChange={(e) => setEmail2(e.target.value)}
              />
            </div>
          </label>
          <label>
            Senha:
            <div className="input-container">
              <i className="fa-solid fa-lock"></i>
              <input
                type="password"
                name="senha"
                placeholder="Sua senha"
                value={senha2}
                onChange={(e) => setSenha2(e.target.value)}
              />
            </div>
          </label>
          <p>Ou entre pelo Gmail</p>
          <GoogleLogin
          onSuccess={responseGoogle}
          onError={() => console.error('Login com Google falhou')}
          />
          <button type="submit" className="btn">Entrar</button>
        </form>
      </div>
    </main>
  );
};

export default Login;
