import React, { useEffect, useState } from "react";
import axios from "axios";
import "../ranking.css";

const Ranking = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRankingData = async () => {
      try {
        // Buscar usuários
        const userResponse = await axios.get("http://localhost:8000/api/usuarios");
        const studyResponse = await axios.get("http://localhost:8000/api/save-study-time");

        // Processar tempos de estudo
        const studyData = studyResponse.data;

        // Criar um mapa de tempos acumulados por user_id
        const userStudyMap = studyData.reduce((acc, study) => {
          const { user_id, time_spent } = study;
          acc[user_id] = (acc[user_id] || 0) + time_spent; // Soma o tempo de estudo
          return acc;
        }, {});

        // Combinar usuários com seus tempos acumulados
        const combinedData = userResponse.data.map((user) => ({
          id: user.id,
          name: user.nome,
          studyHours: (userStudyMap[user.id] || 0) / 3600, // Converter segundos para horas
        }));

        // Ordenar por horas de estudo em ordem decrescente
        const sortedUsers = combinedData.sort((a, b) => b.studyHours - a.studyHours);

        setUsers(sortedUsers);
      } catch (error) {
        console.error("Erro ao carregar dados do ranking:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRankingData();
  }, []);

  return (
    <div className="subjects-section">
      <div className="ranking">
        <h1>Ranking de Horas Estudadas</h1>
        {loading ? (
          <p>Carregando...</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Posição</th>
                <th>Usuário</th>
                <th>Horas Estudadas</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.studyHours.toFixed(2)}h</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Ranking;

