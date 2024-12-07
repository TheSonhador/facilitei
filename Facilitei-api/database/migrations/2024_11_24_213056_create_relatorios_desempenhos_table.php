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
        Schema::create('relatorios_desempenhos', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->float('rel_tempo_total_estudo');
            $table->float('rel_metas_concluidas');

            $table->unsignedInteger('rel_usu_id');
            $table->foreign('rel_usu_id')->references('id')->on('usuarios');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('relatorios_desempenhos');
    }
};
