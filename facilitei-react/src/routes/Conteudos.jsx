import React, { useEffect, useState } from "react";
import Conteudo from "../components/Conteudo";
import axios from "axios"; // é necessário para conectar com a api
import { useParams } from "react-router-dom";

const Conteudos = () => {

  const {id} = useParams();
  const [dados, setDados] = useState([]);
  const [video, setVideo] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/conteudos/${id}`);
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
      if (dados.cont_video_id) {  // Verifica se cont_video_id existe
        try {
          const response = await axios.get(`http://localhost:8000/api/videos/${dados.cont_video_id}`);
          setVideo(response.data);  // Atualiza o estado `video` com a resposta
          console.log("Vídeo recebido:", response.data);
        } catch (error) {
          console.error('Erro ao buscar dados:', error);
        }
      } else {
        console.error('cont_video_id não está definido.');
      }
    };
  
    fetchData();
  }, [dados]);  // Adiciona 'dados' no array de dependências para atualizar quando ele mudar
  

  return (
    <main>
      <div className="container">
        <section className="subjects-section">
          <Conteudo
            conteudo={dados.cont_titulo}
            descricao={dados.cont_descricao}
            link={video.video_url}
          />
          {/* <Conteudo
            conteudo="Geometria Espacial"
            descricao="A geometria espacial é a parte da matemática que estuda as figuras geométricas no espaço, ou seja, que possuem mais de duas dimensões. A geometria espacial se baseia em conceitos primitivos como ponto, reta, plano e espaço. Alguns exemplos de figuras geométricas espaciais são cubos, prismas, pirâmides e cones1. A geometria espacial é importante para desenvolver a percepção sobre o espaço"
            link="https://www.youtube.com/embed/ufA5Vkc2aDM?si=0Lr5LKWg8V5Fur84"
          /> */}
        </section>
      </div>
    </main>
  );
};

export default Conteudos;
