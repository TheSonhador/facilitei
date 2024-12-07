<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Conteudos extends Model
{
    use HasFactory;

    protected $fillable = [
        'cont_titulo', 'cont_descricao', 'cont_disc_id', 'cont_video_id',
    ];

    // protected $with = ['disciplina'];

    // public function disciplinas()
    // {
    //     return $this->belongsTo(Disciplinas::class);
    // }

    // public function videos()
    // {
    //     return $this->hasMany(Videos_educacionais::class);
    // }

}
