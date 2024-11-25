<?php

namespace App\Http\Controllers;

use App\Models\Administradores;
use Illuminate\Http\Request;

class AdministradoresController extends Controller
{
    public function index()
    {
        $administradores = Administradores::all();
        return $administradores;
    }

    public function store(Request $request)
    {
        $admin_nome  = (string) $request->input('admin_nome'); //pode ser "get" no lugar de input
        $admin_email  = (string) $request->input('admin_email'); //pode ser "get" no lugar de input
        $admin_senha  = (string) $request->input('admin_senha');
        $p = Administradores::create(['admin_nome' => $admin_nome, 'admin_email' => $admin_email, 'admin_senha' => $admin_senha]);
        $id = $p->id;
        return response(
            ['location' => route('administradores.show', $id)], // mostra o "id" da pessoa no cmd
            201
        );
    }

    public function show(Administradores $administradores)
    {
        return $administradores;
    }

    public function update(Request $request, Administradores $administrador)
    {
        $admin_nome = (string) $request->input('admin_nome');
        $admin_email = (string) $request->input('admin_email');
        $admin_senha = (string) $request->input('admin_senha');
        if ($admin_nome)
            $administrador->admin_nome = $admin_nome;
        if ($admin_email)
            $administrador->admin_email = $admin_email;
        if ($admin_senha)
            $administrador->admin_senha = $admin_senha;
        $administrador->save();
    }

    public function destroy(Administradores $administrador)
    {
        $administrador->delete();
    }
}
