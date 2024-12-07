<?php

namespace App\Http\Controllers;

use App\Models\StudyTime;
use Illuminate\Http\Request;


class StudyTimeController extends Controller
{
    /**
     * Salva o tempo de estudo no banco de dados.
     */

     public function index()
     {
         $studyTime = StudyTime::all();
         return $studyTime;
     }

    public function store(Request $request)
    {
        // Validação dos dados recebidos
        $validated = $request->validate([
            'user_id' => 'required|integer', // Substitua pela lógica do seu sistema de autenticação
            'time_spent' => 'required|integer', // Tempo em segundos
        ]);

        // Cria um registro na tabela `study_times`
        StudyTime::create($validated);

        // Retorna uma resposta de sucesso com os dados salvos
        return response()->json(['message' => 'Tempo salvo com sucesso!'], 201);
    }

    /**
     * Retorna os tempos de estudo de um usuário específico.
     */


    public function show($id)
    {

        $studyTimes = StudyTime::where('user_id', $id)->get();
        // Retorna os dados em formato JSON
        return $studyTimes;
    }

    public function cronometros_usuario($id) {
        $studyTimes = StudyTime::where('user_id', $id)->get();

        // Retorna os dados em formato JSON
        return response()->json([
            'message' => 'Tempos de estudo encontrados!',
            'data' => $studyTimes,
        ], 200);
    }

    /**
     * Atualiza um tempo de estudo específico.
     */
    public function update(Request $request, $id)
    {
        // Validação dos dados recebidos
        $validated = $request->validate([
            'time_spent' => 'required|integer',
        ]);

        // Encontra o registro pelo ID
        $studyTime = StudyTime::findOrFail($id);

        // Atualiza o tempo de estudo
        $studyTime->update([
            'time_spent' => $validated['time_spent'],
        ]);

        // Retorna uma resposta de sucesso
        return response()->json([
            'message' => 'Tempo de estudo atualizado com sucesso!',
            'data' => $studyTime,
        ], 200);
    }

    /**
     * Exclui um registro de tempo de estudo.
     */
    public function destroy($id)
    {
        // Encontra o registro pelo ID
        $studyTime = StudyTime::findOrFail($id);

        // Exclui o registro
        $studyTime->delete();

        // Retorna uma resposta de sucesso
        return response()->json([
            'message' => 'Tempo de estudo excluído com sucesso!',
        ], 200);
    }
}
