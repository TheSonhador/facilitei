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
        $senha = (string) $request->input('senha');
        $pontuacao = $request->input('pontuacao');
        $admin = $request->input('admin');
        $email = $request->input('email');
        $p = Usuario::create(['email' => $email, 'admin' => $admin,'nome' => $nome, 'idade' => $idade, 'senha' => $senha, 'pontuacao' => $pontuacao]);
        $id = $p->id;
        $usuario = Usuario::where('email', $email)->where('senha', $senha)->get();
        return $usuario;
    }

    public function show(Usuario $usuario)
    {
        return $usuario;
    }

    public function indentificarUsuario(Request $request) {
        $email = $request->input('email');
        $senha = (string) $request->input('senha');

        $usuario = Usuario::where('email', $email)->where('senha', $senha)->get();

        return $usuario;
    }

    public function update(Request $request, Usuario $usuario)
    {
        $nome = (string) $request->input('nome');
        $idade = (int) $request->input('idade');
        $admin = (boolean) $request->input('admin');
        $senha = (string) $request->input('senha');
        $pontuacao = $request->input('pontuacao');
        $email = $request->input('email');
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
        if ($email)
            $usuario->email = $email;
        $usuario->save();
    }

    public function destroy(Usuario $usuario)
    {
        $usuario->delete();
    }
}
