<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Relatorios_desempenho extends Model
{
    use HasFactory;

    protected $fillable = [
        'rel_tempo_total_estudo', 'rel_metas_concluidas', 'rel_usu_id'
    ];

}
