import React from "react";
import "../ranking.css";

const Ranking = () => {
  const users = [
    { id: 1, name: "Alice", score: 95 },
    { id: 2, name: "Bob", score: 90 },
    { id: 3, name: "Carla", score: 85 },
    { id: 4, name: "David", score: 80 },
    { id: 5, name: "Eva", score: 75 },
  ];
  return (
    <div className="subjects-section">
      <div className="ranking">
        <h1>Ranking de Pontuação de Estudos</h1>
        <table>
          <thead>
            <tr>
              <th>Posição</th>
              <th>Usuário</th>
              <th>Pontuação</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Ranking;
