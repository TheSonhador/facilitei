import React, { useState, useEffect } from "react";
import axios from "axios";
import axiosInstance from "axios";

const StudyTimer = () => {

    const usuario = localStorage.getItem("usuario");
    const dadosUsuario = JSON.parse(usuario);
    const [time, setTime] = useState(() => {
        // Recupera o tempo do Local Storage ou inicia com 0
        const savedTime = localStorage.getItem("study-time");
        return savedTime ? parseInt(savedTime, 10) : 0;
    });
    const [isRunning, setIsRunning] = useState(false);

    // Atualiza o tempo em intervalos de 1 segundo quando está rodando
    useEffect(() => {
        let timer;
        if (isRunning) {
            timer = setInterval(() => {
                setTime((prevTime) => {
                    const newTime = prevTime + 1;
                    localStorage.setItem("study-time", newTime); // Salva o tempo no Local Storage
                    return newTime;
                });
            }, 1000);
        } else {
            clearInterval(timer);
        }
        return () => clearInterval(timer);
    }, [isRunning]);

    // Função para salvar o tempo no banco de dados
    const saveTime = async () => {
        try {
            await axios.post("http://localhost:8000/api/save-study-time", { 
                user_id: dadosUsuario[0].id, // Substitua pelo ID real do usuário
                time_spent: time, // Envia o tempo atual em segundos
            });
            alert("Tempo salvo com sucesso!");
            localStorage.removeItem("study-time"); // Limpa o Local Storage após salvar
            setTime(0); // Reseta o cronômetro
        } catch (error) {
            console.error("Erro ao salvar o tempo:", error);
            alert("Erro ao salvar o tempo. Confira o console para mais detalhes.");
        }
    };

    return (
        <div className="timer">
            <div className="timer-text">
                <h1>Cronômetro de Estudo</h1>
                <p>
                    Tempo: {Math.floor(time / 3600)}h {Math.floor((time % 3600) / 60)}m {time % 60}s
                </p>
            </div>
            <button className="btn" onClick={() => setIsRunning(!isRunning)}>
                {isRunning ? "Pausar" : "Iniciar"}
            </button>
            <button className="btn" onClick={saveTime} disabled={time === 0}>
                Salvar Tempo
            </button>
        </div>
    );
};

export default StudyTimer;

