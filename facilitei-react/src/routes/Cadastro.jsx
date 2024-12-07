import React, { useState } from 'react';
import axios from 'axios'; // Certifique-se de importar o axios
import { useNavigate } from 'react-router-dom'; // Importando o useNavigate
import logo from '../assets/img/logo.png';

const Cadastro = () => {
    // Criando estados para os dados do formulário
    const [nome2, setNome2] = useState('');
    const [email2, setEmail2] = useState('');
    const [senha2, setSenha2] = useState('');
    const navigate = useNavigate(); // Hook para navegação após cadastro

    const CadastrarUsuario = async (e) => {
        e.preventDefault(); // Evita o recarregamento da página ao enviar o formulário

        if (email2 != '') {
            if (senha2 != '') {
                if (nome2 != '') {
                    try {
                        // Fazendo a requisição POST para salvar os dados
                        const response = await axios.post("http://localhost:8000/api/usuarios", {
                            nome: nome2, // Envia o nome
                            admin: 0, // Definindo como 0, você pode mudar conforme necessário
                            pontuacao: 0, // Definindo a pontuação como 0, ajuste conforme necessário
                            idade: 0, // Definindo a idade como 0, ajuste conforme necessário
                            senha: senha2, // Envia a senha
                            email: email2 // Envia o e-mail
                        });
            
                        // Salva os dados do usuário no localStorage ou sessionStorage (ou em um estado global)
                        localStorage.setItem("usuario", JSON.stringify(response.data));
            
                        // Após salvar, você pode redirecionar o usuário para a página desejada
                        navigate('/home'); // Aqui você redireciona para a página desejada após o cadastro
            
                    } catch (error) {
                        console.error("Erro ao salvar os dados do usuário:", error);
                        alert("Erro ao salvar os dados. Confira o console para mais detalhes.");
                    }
                }
            }
        }
    };

    return (
        <main className='section-auth'>
            <div className='intro-section'>
                <div className='content-intro-section'>
                    <img className="logo" src={logo} width="350px" alt="Logo" />
                    <p id='text-intro'>Bem-vindo! <br/> Cadastre-se para uma melhor experiência.</p>
                    <p>Já tem uma conta? <a href='login'>Entrar</a></p>
                </div>
            </div>

            <div className='auth-section'>
                <h2>Criar conta</h2>
                <form onSubmit={CadastrarUsuario}> {/* Vincula o envio do formulário com a função saveTime */}
                    <label>
                        Nome:
                        <div className="input-container">
                            <i className="far fa-user"></i>
                            <input 
                                type="text" 
                                name="nome" 
                                placeholder="Seu nome" 
                                value={nome2} 
                                onChange={(e) => setNome2(e.target.value)} // Atualiza o estado com o valor digitado
                            />
                        </div>
                    </label>
                    <label>
                        Email:
                        <div className="input-container">
                            <i className="far fa-envelope"></i>
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="Seu email" 
                                value={email2} 
                                onChange={(e) => setEmail2(e.target.value)} // Atualiza o estado com o valor digitado
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
                                onChange={(e) => setSenha2(e.target.value)} // Atualiza o estado com o valor digitado
                            />
                        </div>
                    </label>
                    <p>Ou cadastre-se pelo Gmail</p>
                    <button type="submit" className="btn">Cadastrar</button>
                </form>
            </div>
        </main>
    );
};

export default Cadastro;
