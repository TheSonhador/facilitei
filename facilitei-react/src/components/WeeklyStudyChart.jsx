import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Registrar os componentes do Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const WeeklyStudyChart = ({ data }) => {
  const chartData = {
    labels: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"], // Dias da semana
    datasets: [
      {
        label: "Horas Estudadas",
        data: data, // Array com as horas estudadas
        backgroundColor: "rgba(75, 192, 192, 0.6)", // Cor das barras
        borderColor: "rgba(75, 192, 192, 1)", // Cor da borda das barras
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Horas Estudadas por Dia na Semana",
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default WeeklyStudyChart;
