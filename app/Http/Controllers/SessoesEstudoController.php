<?php

namespace App\Http\Controllers;

use App\Models\Metas_estudo;
use Illuminate\Http\Request;
use App\Models\Sessoes_estudo;
use App\Models\Usuario;

class SessoesEstudoController extends Controller
{
    public function index()
    {
        $Sessoes = Sessoes_estudo::all();
        return $Sessoes;
    }

    public function store(Request $request)
    {
        $id = (int) $request->input('sessao_usu_id');
        $usuario = Usuario::find($id);
        if ($usuario == null) {
            $sessao_usu_id = null;
        }
        else {
            $sessao_usu_id = $id;
        }
        $id2 = (int) $request->input('sessao_meta_id');
        $meta = Metas_estudo::find($id2);
        if ($meta == null) {
            $sessao_meta_id = null;
        }
        else {
            $sessao_meta_id = $id2;
        }
        $sessao_inicio = (string) $request->input('sessao_inicio'); //pode ser "get" no lugar de input
        $sessao_fim = (string) $request->input('sessao_fim'); //pode ser "get" no lugar de input
        $sessao_tempo_total = (integer) $request->input('sessao_tempo_total');
        $conteudos = Sessoes_estudo::create(['sessao_inicio' => $sessao_inicio, 'sessao_fim' => $sessao_fim, 'sessao_tempo_total' => $sessao_tempo_total, 'sessao_meta_id' => $sessao_meta_id, 'sessao_usu_id' => $sessao_usu_id]);
        $id = $conteudos->id;
        return response(
            ['location' => route('sessoes.show', $id)], // mostra o "id" da pessoa no cmd
            201
        );
    }

    public function show(Sessoes_estudo $Sessoes)
    {
        return $Sessoes;
    }

    public function update(Request $request, Sessoes_estudo $Sessoes)
    {
        $id = (int) $request->input('sessao_usu_id');
        $usuario = Usuario::find($id);
        if ($usuario == null) {
            $sessao_usu_id = null;
        }
        else {
            $sessao_usu_id = $id;
        }
        $id2 = (int) $request->input('sessao_meta_id');
        $meta = Metas_estudo::find($id2);
        if ($meta == null) {
            $sessao_meta_id = null;
        }
        else {
            $sessao_meta_id = $id2;
        }
        $sessao_inicio = (string) $request->input('sessao_inicio'); //pode ser "get" no lugar de input
        $sessao_fim = (string) $request->input('sessao_fim'); //pode ser "get" no lugar de input
        $sessao_tempo_total = (integer) $request->input('sessao_tempo_total');
        if ($sessao_inicio)
            $Sessoes->sessao_inicio = $sessao_inicio;
        if ($sessao_fim)
            $Sessoes->sessao_fim = $sessao_fim;
        if ($sessao_tempo_total)
            $Sessoes->sessao_tempo_total = $sessao_tempo_total;
        if ($sessao_meta_id)
            $Sessoes->sessao_meta_id = $sessao_meta_id;
        if ($sessao_usu_id)
            $Sessoes->sessao_usu_id = $sessao_usu_id;
        $Sessoes->save();
    }

    public function destroy(Sessoes_estudo $Sessoes)
    {
        $Sessoes->delete();
    }
}
