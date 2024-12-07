<?php

namespace App\Http\Controllers;

use App\Models\Disciplinas;
use Illuminate\Http\Request;

class DisciplinasController extends Controller
{
    public function index()
    {
        $Disciplinas = Disciplinas::all();
        return $Disciplinas;
    }

    public function store(Request $request)
    {
        $disc_nome = (string) $request->input('disc_nome'); //pode ser "get" no lugar de input
        $disc_descricao = (string) $request->input('disc_descricao');
        $disciplina = Disciplinas::create(['disc_nome' => $disc_nome, 'disc_descricao' => $disc_descricao]);
        $id = $disciplina->id;
        return response(
            ['location' => route('disciplinas.show', $id)], // mostra o "id" da pessoa no cmd
            201
        );
    }

    public function show(Disciplinas $Disciplina)
    {
        return $Disciplina;
    }

    public function update(Request $request, Disciplinas $Disciplina)
    {
        $disc_nome = (string) $request->input('disc_nome');
        $disc_descricao = (string) $request->input('disc_descricao');
        $pontuacao = $request->input('pontuacao');
        if ($disc_nome)
            $Disciplina->disc_nome = $disc_nome;
        if ($disc_descricao)
            $Disciplina->disc_descricao = $disc_descricao;
        $Disciplina->save();
    }

    public function destroy(Disciplinas $Disciplina)
    {
        $Disciplina->delete();
    }
}
