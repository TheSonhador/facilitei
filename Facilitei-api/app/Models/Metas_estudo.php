<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Metas_estudo extends Model
{
    use HasFactory;

    protected $fillable = [
        'meta_titulo', 'meta_descricao', 'meta_categoria', 'meta_data_limite', 'meta_concluida', 'meta_usu_id',
    ];

    // protected $with = ['usuario'];

    //     /**
    //  * Get associated user.
    //  *
    //  * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
    //  */
    // public function user()
    // {
    //     return $this->belongsTo(Usuario::class);
    // }

    // /**
    //  * Get associated timers.
    //  *
    //  * @return \Illuminate\Database\Eloquent\Relations\HasMany
    //  */
    // public function cronometros()
    // {
    //     return $this->hasMany(Sessoes_estudo::class);
    // }

    // /**
    //  * Get my projects
    //  *
    //  * @param  \Illuminate\Database\Eloquent\Builder $query
    //  * @return \Illuminate\Database\Eloquent\Builder
    //  */
    // public function scopeMine($query)
    // {
    //     return $query->whereUserId(auth()->user()->id);
    // }
}
