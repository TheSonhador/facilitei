<?php

use App\Http\Controllers\ConteudosController;
use App\Http\Controllers\DisciplinasController;
use App\Http\Controllers\MetasEstudoController;
use App\Http\Controllers\UsuarioController;
use App\Http\Controllers\VideosEducacionaisController;
use App\http\Controllers\RelatoriosDesempenhoController;
use App\Http\Controllers\SessoesEstudoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::apiResource('usuarios', UsuarioController::class);
Route::apiResource('videos', VideosEducacionaisController::class);
Route::apiResource('relatorios', RelatoriosDesempenhoController::class);
Route::apiResource('disciplinas', DisciplinasController::class);
Route::apiResource('conteudos', ConteudosController::class);
Route::apiResource('metas', MetasEstudoController::class);
Route::apiResource('sessoes', SessoesEstudoController::class);
