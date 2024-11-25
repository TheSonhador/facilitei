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
        Schema::create('metas_estudos', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('meta_titulo');
            $table->string('meta_descricao');
            $table->string('meta_categoria');
            $table->date('meta_data_limite');
            $table->boolean('meta_concluida');
            $table->unsignedInteger('meta_usu_id');
            $table->foreign('meta_usu_id')->references('id')->on('usuarios');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('metas_estudos');
    }
};
