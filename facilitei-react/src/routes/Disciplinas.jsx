import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios"; // é necessário para conectar com a api
// import "../disciplinas.css";

const Disciplinas = () => {

  const {id} = useParams();
  const [dados, setDados] = useState([]);
  const [disciplina, setDisciplina] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/conteudos/disciplina/${id}`);
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
  useEffect(() => {
    const fetchData = async () => {
      if (dados[0].cont_disc_id) {
        try {
          const response = await axios.get(`http://localhost:8000/api/disciplinas/${dados[0].cont_disc_id}`);
          setDisciplina(response.data);  // Atualiza o estado `video` com a resposta
          console.log("Vídeo recebido:", response.data);
        } catch (error) {
          console.error('Erro ao buscar dados:', error);
        }
      }
    };
  
    fetchData();
  }, [dados]);
  return (
    <main>
      <div className="container">
        <section className="subjects-section">
          <div className="subjects-header">
            <h1 className="subjects-title">Conteudos de {disciplina && disciplina.disc_nome}</h1>
          </div>


          {/* Renderizando os conteúdos dinamicamente */}
          {dados.length > 0 ? (
            dados.map((conteudo, index) => (
              <div key={index} className="content-row">
                <a href="#">
                {dados[0] ? <Link to={"/disciplinas/conteudos/" + conteudo.id}>{dados[0] && conteudo.cont_titulo}</Link> : <p></p>}
                </a>
                <div className="video">
                  <Link to={`/disciplinas/conteudos/${conteudo.id}`}>
                    <i className="fa-brands fa-youtube"></i>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p>Nenhum conteúdo encontrado.</p>
          )}
          
        </section>
      </div>
    </main>
  );
};

export default Disciplinas;
