<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Videos_educacionais extends Model
{
    use HasFactory;

    protected $fillable = [
        'video_url', 'video_tema', 'video_descricao'
    ];
}
