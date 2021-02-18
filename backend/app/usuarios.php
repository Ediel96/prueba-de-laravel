<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class usuarios extends Model
{
    protected $fillable = [
        'nombre', 'apellido', 'correo','telefono'
    ];

    public $timestamps = false;
}
