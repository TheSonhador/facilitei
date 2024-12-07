<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sessoes_estudo extends Model
{
    use HasFactory;

    protected $fillable = [
        'sessao_inicio', 'sessao_fim', 'sessao_tempo_total', 'sessao_usu_id', 'sessao_meta_id'
    ];


    /**
    * {@inheritDoc}
    */
    protected $dates = ['sessao_inicio', 'sessao_fim'];

    // /**
    //  * {@inheritDoc}
    //  */
    // protected $with = ['user'];

    // /**
    //  * Get the related user.
    //  *
    //  * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
    //  */
    // public function user()
    // {
    //     return $this->belongsTo(Usuario::class);
    // }

    // /**
    //  * Get the related project
    //  *
    //  * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
    //  */
    // public function project()
    // {
    //     return $this->belongsTo(Metas_estudo::class);
    // }

    /**
     * Get the running timers
     *
     * @param  \Illuminate\Database\Eloquent\Builder $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeRunning($query)
    {
        return $query->whereNull('sessao_fim');
    }

}
