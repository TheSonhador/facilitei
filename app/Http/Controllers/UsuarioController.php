<?php

namespace App\Http\Controllers;

use App\Models\Usuario;
use Illuminate\Http\Request;

class UsuarioController extends Controller
{
    public function index()
    {
        $usuarios = Usuario::all();
        return $usuarios;
    }

    public function store(Request $request)
    {
        $nome = (string) $request->input('nome'); //pode ser "get" no lugar de input
        $idade = (int) $request->input('idade'); //pode ser "get" no lugar de input
        $admin = (boolean) $request->input('');
        $senha = (string) $request->input('senha');
        $pontuacao = $request->input('pontuacao');
        $p = Usuario::create(['nome' => $nome, 'idade' => $idade, 'admin' => $admin, 'senha' => $senha, 'pontuacao' => $pontuacao]);
        $id = $p->id;
        return response(
            ['location' => route('usuarios.show', $id)], // mostra o "id" da pessoa no cmd
            201
        );
    }

    public function show(Usuario $usuario)
    {
        return $usuario;
    }

    public function update(Request $request, Usuario $usuario)
    {
        $nome = (string) $request->input('nome'); 
        $idade = (int) $request->input('idade'); 
        $admin = (boolean) $request->input('admin');
        $senha = (string) $request->input('senha');
        $pontuacao = $request->input('pontuacao');
        if ($nome)
            $usuario->nome = $nome;
        if ($idade)
            $usuario->idade = $idade;
        if ($admin)
            $usuario->admin = $admin;
        if ($senha)
            $usuario->senha = $senha;
        if ($pontuacao)
            $usuario->pontuacao = $pontuacao;
        $usuario->save();
    }

    public function destroy(Usuario $usuario)
    {
        $usuario->delete();
    }
}
