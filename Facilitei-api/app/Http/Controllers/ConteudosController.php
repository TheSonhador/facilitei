<?php

namespace App\Http\Controllers;

use App\Models\Conteudos;
use Illuminate\Http\Request;
use App\Models\Videos_educacionais;
use App\Models\Disciplinas;

class ConteudosController extends Controller
{
    public function index()
    {
        $Conteudos = Conteudos::all();
        return $Conteudos;
    }

    public function store(Request $request)
    {
        $id = (int) $request->input('cont_disc_id');
        $disciplina = disciplinas::find($id);
        if ($disciplina == null) {
            $cont_disc_id = null;
        }
        else {
            $cont_disc_id = $id;
        }
        $id2 = (int) $request->input('cont_video_id');
        $video = Videos_educacionais::find($id2);
        if ($video == null) {
            $cont_video_id = null;
        }
        else {
            $cont_video_id = $id2;
        }
        $cont_titulo = (string) $request->input('cont_titulo'); //pode ser "get" no lugar de input
        $cont_descricao = (string) $request->input('cont_descricao'); //pode ser "get" no lugar de input
        $conteudos = Conteudos::create(['cont_titulo' => $cont_titulo, 'cont_descricao' => $cont_descricao, 'cont_disc_id' => $cont_disc_id, 'cont_video_id' => $cont_video_id]);
        $id = $conteudos->id;
        return response(
            ['location' => route('conteudos.show', $id)], // mostra o "id" da pessoa no cmd
            201
        );
    }

    public function show(Conteudos $conteudo)
    {
        return $conteudo;
    }

    public function conteudos_de_disciplina($id) {

        $conteudos = Conteudos::where('cont_disc_id', $id)->get();

        // Retorna os dados em formato JSON
        return $conteudos;
    }

    public function update(Request $request, Conteudos $conteudo)
    {
        $id = (int) $request->input('cont_disc_id');
        $disciplina = disciplinas::find($id);
        if ($disciplina == null) {
            $cont_disc_id = null;
        }
        else {
            $cont_disc_id = $id;
        }
        $id2 = (int) $request->input('cont_video_id');
        $video = Videos_educacionais::find($id2);
        if ($video == null) {
            $cont_video_id = null;
        }
        else {
            $cont_video_id = $id2;
        }
        $cont_titulo = (string) $request->input('cont_titulo'); //pode ser "get" no lugar de input
        $cont_descricao = (string) $request->input('cont_descricao'); //pode ser "get" no lugar de input
        if ($cont_titulo)
            $conteudo->cont_titulo = $cont_titulo;
        if ($cont_descricao)
            $conteudo->cont_descricao = $cont_descricao;
        if ($cont_video_id)
            $conteudo->cont_video_id = $cont_video_id;
        if ($cont_disc_id)
            $conteudo->cont_disc_id = $cont_disc_id;
        $conteudo->save();
    }

    public function destroy(Conteudos $conteudo)
    {
        $conteudo->delete();
    }
}
