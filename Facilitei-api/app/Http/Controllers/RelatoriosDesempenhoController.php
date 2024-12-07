<?php

namespace App\Http\Controllers;

use App\Models\Relatorios_desempenho;
use App\Models\Usuario;
use Illuminate\Http\Request;

class RelatoriosDesempenhoController extends Controller
{
    public function index()
    {
        $relatorio = Relatorios_desempenho::all();
        return $relatorio;
    }

    public function store(Request $request)
    {
        $id = (int) $request->input('rel_usu_id');
        $usuario = Usuario::find($id);
        if ($usuario == null) {
            $rel_usu_id = null;
        }
        else {
            $rel_usu_id = $id;
        }
        $rel_tempo_total_estudo = (float) $request->input('rel_tempo_total_estudo'); //pode ser "get" no lugar de input
        $rel_metas_concluidas = (float) $request->input('rel_metas_concluidas'); //pode ser "get" no lugar de input
        $relatorios = Relatorios_desempenho::create(['rel_tempo_total_estudo' => $rel_tempo_total_estudo, 'rel_metas_concluidas' => $rel_metas_concluidas, 'rel_usu_id' => $rel_usu_id]);
        $id = $relatorios->id;
        return response(
            ['location' => route('relatorios.show', $id)], // mostra o "id" da pessoa no cmd
            201
        );
    }

    public function show(Relatorios_desempenho $relatorio)
    {
        return $relatorio;
    }

    public function update(Request $request, Relatorios_desempenho $relatorio)
    {
        $id = (int) $request->input('rel_usu_id');
        $usuario = Usuario::find($id);
        if ($usuario == null) {
            $rel_usu_id = null;
        }
        else {
            $rel_usu_id = $id;
        }
        $rel_tempo_total_estudo = (float) $request->input('rel_tempo_total_estudo'); //pode ser "get" no lugar de input
        $rel_metas_concluidas = (float) $request->input('rel_metas_concluidas'); //pode ser "get" no lugar de input
        if ($rel_tempo_total_estudo)
            $relatorio->rel_tempo_total_estudo = $rel_tempo_total_estudo;
        if ($rel_metas_concluidas)
            $relatorio->rel_metas_concluidas = $rel_metas_concluidas;
        if ($rel_usu_id)
            $relatorio->rel_usu_id = $rel_usu_id;
        $relatorio->save();
    }

    public function destroy(Relatorios_desempenho $relatorio)
    {
        $relatorio->delete();
    }
}
