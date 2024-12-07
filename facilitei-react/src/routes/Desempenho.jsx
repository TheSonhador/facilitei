import React, { useEffect, useState } from "react";
import WeeklyStudyChart from "../components/WeeklyStudyChart.jsx";
import "../desempenho.css";
import axios from "axios";

const Desempenho = () => {
  const [studyHours, setStudyHours] = useState([0, 0, 0, 0, 0, 0, 0]); // Inicializa com 0 horas para cada dia da semana
  const [totalHoras, setTotalHoras] = useState("0h 0m 0s");
  const [dados, setDados] = useState([]);
  const usuario = localStorage.getItem("usuario");
  const dadosUsuario = JSON.parse(usuario);
  console.log(dadosUsuario[0].id)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/save-study-time/${dadosUsuario[0].id}`);

        console.log('Resposta da API:', response.data); // Para verificar os dados da resposta

        // Verifica se response.data.data existe e é um array
        if (response.data && Array.isArray(response.data)) {
          setDados(response.data); // Atualiza os dados com a resposta da API

          // Inicializa um array de 7 elementos para armazenar as horas de estudo por dia (de domingo a sábado)
          let studyHoursPerDay = [0, 0, 0, 0, 0, 0, 0];
          let studyHoursPerDay2 = [0, 0, 0, 0, 0, 0, 0];

          // Agrupa os dados de estudo por dia da semana
          response.data.forEach((item) => {
            // Vamos assumir que "item.date" é a data do estudo e "item.time_spent" é o tempo gasto (em segundos)
            const studyDate = new Date(item.created_at);
            const dayOfWeek = studyDate.getDay(); // Retorna o índice do dia da semana (0 - domingo, 1 - segunda-feira, ..., 6 - sábado)

            // Soma o tempo de estudo ao dia correspondente (em segundos)
            studyHoursPerDay[dayOfWeek] += item.time_spent; 
            studyHoursPerDay2[dayOfWeek] += item.time_spent / 3600;
          });

          // Atualiza o estado studyHours com os tempos de estudo por dia
          setStudyHours(studyHoursPerDay2);

          // Calculando o total de horas estudadas (em segundos) para mostrar o tempo total no formato "h:m:s"
          let totalTimeInSeconds = studyHoursPerDay.reduce((acc, time) => acc + time, 0);

          // Convertendo para horas, minutos e segundos
          const horas = Math.floor(totalTimeInSeconds / 3600);
          const minutos = Math.floor((totalTimeInSeconds % 3600) / 60);
          const segundos = totalTimeInSeconds % 60;

          setTotalHoras(`${horas}h ${minutos}m ${segundos}s`); // Atualiza a exibição do total de horas
        } else {
          console.error('Dados de tempo de estudo não encontrados ou a estrutura está incorreta');
        }

      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchData();
  }, [dadosUsuario.id]);

  return (
    <main>
      <div className="container">
        <section className="subjects-section">
          <div className="desempenho">
            <h1>Estatísticas de Estudos</h1>
            <h4>Horas Estudadas no Total: <span>{totalHoras}</span></h4>
            {/* Passando o array de horas de estudo por dia para o gráfico */}
            <WeeklyStudyChart data={studyHours} />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Desempenho;


