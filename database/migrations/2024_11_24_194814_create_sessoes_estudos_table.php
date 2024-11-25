<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sessoes_estudos', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('sessao_tempo_total');
            $table->timestamp('sessao_inicio');
            $table->timestamp('sessao_fim')->default(null)->nullable();
            $table->timestamps();
            $table->unsignedInteger('sessao_usu_id');
            $table->unsignedInteger('sessao_meta_id');

            $table->foreign('sessao_usu_id')->references('id')->on('usuarios');
            $table->foreign('sessao_meta_id')->references('id')->on('metas_estudos');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sessoes_estudos');
    }
};
