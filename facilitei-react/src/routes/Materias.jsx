import React, { useEffect, useState } from "react";
import axios from "axios"; // é necessário para conectar com a api
import vetorHumanas from "../assets/img/vector-humanas.png";
import vetorLinguagens from "../assets/img/vector-linguagens.png";

const Materias = () => {

  const [dados, setDados] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/disciplinas');
        setDados(response.data);
        console.log(response.data);

        // Se fosse uma requisição post ficaria assim:
        // const response = await axios.post('http://localhost:8000/disciplinas', {
        // nome: 'Nova Disciplina',
        // descricao: 'Descrição da nova disciplina'
        // });
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, []); 
  return (
    <main>
      <div class="container">
        <section class="subjects-section">
          <header class="subjects-header">
            <h1 class="subjects-title">Matérias</h1>
            <p class="subjects-description">
              Consulte o material de apoio, questões e assuntos de cada
              disciplina.
            </p>
          </header>

          <div class="subjects-content">
            <div class="subject-category">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9248aa6baba472d5b2cc29bfb726fb3eae8be02938cb961ccb878ed2f9adf27a?placeholderIfAbsent=true&apiKey=568e5aea885f40bb912321011c523fe7"
                alt=""
                class="category-icon"
              />
              <h2>Matemática</h2>
            </div>

            <div class="subject-grid">
              <div class="subject-row">
                <article class="subject-card math-card">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b258857c8174535195b977d7412a41b0c4678b7fe30efea53dff924c0ec4f898?placeholderIfAbsent=true&apiKey=568e5aea885f40bb912321011c523fe7"
                    alt="Ícone de Matemática"
                    class="subject-icon"
                  />
                  <h3 class="subject-name math-name">Matemática</h3>
                </article>
                <article class="subject-card math-card">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/24e60f094644c93c59ccf50ba04241d4e20cda03a8f6e378439416b55af0606b?placeholderIfAbsent=true&apiKey=568e5aea885f40bb912321011c523fe7"
                    alt="Ícone de Matemática Básica"
                    class="subject-icon"
                  />
                  <h3 class="subject-name math-name">Matemática Básica</h3>
                </article>
              </div>
            </div>

            <div class="subject-category">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d348a5fd53625222839b75d09480f4f681c9df48fef64aa4bf0ce2b7e88637d?placeholderIfAbsent=true&apiKey=568e5aea885f40bb912321011c523fe7"
                alt=""
                class="category-icon"
              />
              <h2>Ciências da Natureza</h2>
            </div>
            <div class="subject-grid">
              <div class="subject-row">
                <article class="subject-card science-card">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c30badf3f1c1a7261806975c88b9a7e00a40fddba05f5fbf83a6e9d247c571b2?placeholderIfAbsent=true&apiKey=568e5aea885f40bb912321011c523fe7"
                    alt="Ícone de Biologia"
                    class="subject-icon"
                  />
                  <h3 class="subject-name science-name">Biologia</h3>
                </article>
                <article class="subject-card science-card">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e6ebaf881b10ccef8cc9236c2194df3c56b2176fefb0a509f6560901c606a407?placeholderIfAbsent=true&apiKey=568e5aea885f40bb912321011c523fe7"
                    alt="Ícone de Química"
                    class="subject-icon"
                  />
                  <h3 class="subject-name science-name">Química</h3>
                </article>
                <article class="subject-card science-card">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a12020569dd42d9733cfb0ed0665dfb59a0c625f476a060c0ea03c311d0778d9?placeholderIfAbsent=true&apiKey=568e5aea885f40bb912321011c523fe7"
                    alt="Ícone de Física"
                    class="subject-icon"
                  />
                  <h3 class="subject-name science-name">{dados[0] && dados[0].disc_nome}</h3>
                </article>
              </div>
            </div>

            <div class="subject-category">
              <img
                src={vetorHumanas}
                alt="vetor de humanas"
                class="category-icon"
              />
              <h2>Ciências Humanas</h2>
            </div>
            <div class="subject-grid">
              <div class="subject-row">
                <article class="subject-card humanas-card">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/db14240ed723af122ca3e438a5b082a9fd7ae4548975991c71bd6bc0d611e0a5?placeholderIfAbsent=true&apiKey=568e5aea885f40bb912321011c523fe7"
                    alt="Ícone de Historia"
                    class="subject-icon"
                  />
                  <h3 class="subject-name humanas-name">História</h3>
                </article>
                <article class="subject-card humanas-card">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/aae19cd5a48fe214fc4e54f5bd8cd47bb468193ec9f07a7a2fa0bcaad8797c15?placeholderIfAbsent=true&apiKey=568e5aea885f40bb912321011c523fe7"
                    alt="Ícone de Geografia"
                    class="subject-icon"
                  />
                  <h3 class="subject-name humanas-name">Geografia</h3>
                </article>
                <article class="subject-card humanas-card">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5ce3ea2fdbef96114c8931b3eec56d1d9fcda67c74b5644864ea124dd9d7f93?placeholderIfAbsent=true&apiKey=568e5aea885f40bb912321011c523fe7"
                    alt="Ícone de Filosofia"
                    class="subject-icon"
                  />
                  <h3 class="subject-name humanas-name">Filosofia</h3>
                </article>
                <article class="subject-card humanas-card">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/32e0bcee1ccd44f044012d06facfcbf5615964a23b1bf564368a7da364042313?placeholderIfAbsent=true&apiKey=568e5aea885f40bb912321011c523fe7"
                    alt="Ícone de Sociologia"
                    class="subject-icon"
                  />
                  <h3 class="subject-name humanas-name">Sociologia</h3>
                </article>
                <article class="subject-card humanas-card">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/92a6ed0de3eb2358163b3b361800fdee7285a4169c79d78045a258f0779ebf9f?placeholderIfAbsent=true&apiKey=568e5aea885f40bb912321011c523fe7"
                    alt="Ícone de Atualidades"
                    class="subject-icon"
                  />
                  <h3 class="subject-name humanas-name">Atualidades</h3>
                </article>
              </div>
            </div>

            <div class="subject-category">
              <img
                src={vetorLinguagens}
                alt="vetor de linguagens"
                class="category-icon"
              />
              <h2>Linguagens</h2>
            </div>
            <div class="subject-grid">
              <div class="subject-row">
                <article class="subject-card linguagens-card">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/63f3768e72b46e7e18e66d924329c1c97d6c1046c286f8acb88cfb1887f5ec8b?placeholderIfAbsent=true&apiKey=568e5aea885f40bb912321011c523fe7"
                    alt="Ícone de Portugues"
                    class="subject-icon"
                  />
                  <h3 class="subject-name linguagens-name">Português</h3>
                </article>
                <article class="subject-card linguagens-card">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4209e997b238a44fcc1f833e023448c215ace90f3d25a407fe2271e03d4b643b?placeholderIfAbsent=true&apiKey=568e5aea885f40bb912321011c523fe7"
                    alt="Ícone de Literatura"
                    class="subject-icon"
                  />
                  <h3 class="subject-name linguagens-name">Literatura</h3>
                </article>
                <article class="subject-card linguagens-card">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6348a4484cbcdbefd32def83d77d756b0eca6ddaca5d4d0f54d575d43b7230c0?placeholderIfAbsent=true&apiKey=568e5aea885f40bb912321011c523fe7"
                    alt="Ícone de Artes"
                    class="subject-icon"
                  />
                  <h3 class="subject-name linguagens-name">Artes</h3>
                </article>
                <article class="subject-card linguagens-card">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/144c1e5b251f929ee3e8121cd42e460bb21b04e758935de8abec62d750aba34d?placeholderIfAbsent=true&apiKey=568e5aea885f40bb912321011c523fe7"
                    alt="Ícone de Ingles"
                    class="subject-icon"
                  />
                  <h3 class="subject-name linguagens-name">Inglês</h3>
                </article>
                <article class="subject-card linguagens-card">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/af951cbad13914e80a229a692f999ab591398180897426396916d929b3e4904f?placeholderIfAbsent=true&apiKey=568e5aea885f40bb912321011c523fe7"
                    alt="Ícone de Espanhol"
                    class="subject-icon"
                  />
                  <h3 class="subject-name linguagens-name">Espanhol</h3>
                </article>
                <article class="subject-card linguagens-card">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/96be1bb7fa53e16fac5d07e9beb023b1669f9d22cae33d1821a9143fe3bf6fca?placeholderIfAbsent=true&apiKey=568e5aea885f40bb912321011c523fe7"
                    alt="Ícone de Redacao"
                    class="subject-icon"
                  />
                  <h3 class="subject-name linguagens-name">Redação</h3>
                </article>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Materias;
