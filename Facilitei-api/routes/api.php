<?php

use App\Http\Controllers\AdministradoresController;
use App\Http\Controllers\ConteudosController;
use App\Http\Controllers\DisciplinasController;
use App\Http\Controllers\MetasEstudoController;
use App\Http\Controllers\UsuarioController;
use App\Http\Controllers\VideosEducacionaisController;
use App\http\Controllers\RelatoriosDesempenhoController;
use App\Http\Controllers\SessoesEstudoController;
use App\Http\Controllers\StudyTimeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::apiResource('usuarios', UsuarioController::class);
Route::apiResource('videos', VideosEducacionaisController::class);
Route::apiResource('relatorios', RelatoriosDesempenhoController::class);
Route::apiResource('disciplinas', DisciplinasController::class);
Route::apiResource('conteudos', ConteudosController::class);
Route::apiResource('metas', MetasEstudoController::class);
Route::apiResource('sessoes', SessoesEstudoController::class);
Route::apiResource('administradores', AdministradoresController::class);
Route::apiResource('save-study-time', StudyTimeController::class);

Route::get('/study-times/{id}', [StudyTimeController::class, 'show']);
Route::get('/conteudos/disciplina/{id}', [ConteudosController::class, 'conteudos_de_disciplina']);
Route::post('/usuarios/autenticar', [UsuarioController::class, 'indentificarUsuario']);

// Route::group(['middleware' => 'cors'], function () {
//     //Route::apiResource('usuarios', UsuarioController::class) ;
//     Route::apiResource('videos', VideosEducacionaisController::class);
//     Route::apiResource('relatorios', RelatoriosDesempenhoController::class);
//     Route::apiResource('disciplinas', DisciplinasController::class);
//     Route::apiResource('conteudos', ConteudosController::class);
//     Route::apiResource('metas', MetasEstudoController::class);
//     Route::apiResource('sessoes', SessoesEstudoController::class);
//     Route::apiResource('administradores', AdministradoresController::class);

//     Route::apiResource('save-study-time', StudyTimeController::class);
// });
