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
        Schema::create('conteudos', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('cont_titulo');
            $table->string('cont_descricao');
            $table->unsignedInteger('cont_disc_id');
            $table->unsignedInteger('cont_video_id');

            $table->foreign('cont_disc_id')->references('id')->on('disciplinas');
            $table->foreign('cont_video_id')->references('id')->on('videos_educacionais');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('conteudos');
    }
};
