<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Disciplinas extends Model
{
    use HasFactory;

    protected $fillable = [
        'disc_descricao', 'disc_nome'
    ];
}
