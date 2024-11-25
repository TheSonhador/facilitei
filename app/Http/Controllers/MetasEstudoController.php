<?php

namespace App\Http\Controllers;

use App\Models\Usuario;
use App\Models\Metas_estudo;
use Illuminate\Http\Request;

class MetasEstudoController extends Controller
{
    public function index()
    {
        $Meta = Metas_estudo::all();
        return $Meta;
    }

    public function store(Request $request)
    {
        $id = (int) $request->input('meta_usu_id');
        $usuario = Usuario::find($id);
        if ($usuario == null) {
            $meta_usu_id = null;
        }
        else {
            $meta_usu_id = $id;
        }
        $meta_titulo = (string) $request->input('meta_titulo'); //pode ser "get" no lugar de input
        $meta_descricao = (string) $request->input('meta_descricao'); //pode ser "get" no lugar de input
        $meta_categoria = (string) $request->input('meta_categoria');
        $meta_data_limite = (string) $request->input('meta_data_limite');
        $meta_concluida = (boolean) $request->input('meta_concluida');
        $metas = Metas_estudo::create(['meta_titulo' => $meta_titulo, 'meta_descricao' => $meta_descricao, 'meta_data_limite' => $meta_data_limite, 'meta_concluida' => $meta_concluida, 'meta_categoria' => $meta_categoria, 'meta_usu_id' => $meta_usu_id]);
        $id = $metas->id;
        return response(
            ['location' => route('metas.show', $id)], // mostra o "id" da pessoa no cmd
            201
        );
    }

    public function show(Metas_estudo $metas)
    {
        return $metas;
    }

    public function update(Request $request, Metas_estudo $metas)
    {
        $id = (int) $request->input('meta_usu_id');
        $usuario = Usuario::find($id);
        if ($usuario == null) {
            $meta_usu_id = null;
        }
        else {
            $meta_usu_id = $id;
        }
        $meta_titulo = (string) $request->input('meta_titulo'); //pode ser "get" no lugar de input
        $meta_descricao = (string) $request->input('meta_descricao'); //pode ser "get" no lugar de input
        $meta_categoria = (string) $request->input('meta_categoria');
        $meta_data_limite = (string) $request->input('meta_data_limite');
        $meta_concluida = (boolean) $request->input('meta_concluida');
        if ($meta_titulo)
            $metas->meta_titulo = $meta_titulo;
        if ($meta_descricao)
            $metas->meta_descricao = $meta_descricao;
        if ($meta_categoria)
            $metas->meta_categoria = $meta_categoria;
            if ($meta_data_limite)
            $metas->meta_data_limite = $meta_data_limite;
        if ($meta_concluida)
            $metas->meta_concluida = $meta_concluida;
        if ($meta_usu_id)
            $metas->meta_usu_id = $meta_usu_id;
        $metas->save();
    }

    public function destroy(Metas_estudo $metas)
    {
        $metas->delete();
    }
}

