<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsuariosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('usuarios', function (Blueprint $table) {
            $table->increments('id');
            $table->string('nombre', 191);
            $table->string('apellido', 191);
            $table->string('correo', 191);
            $table->string('telefono', 191);
            $table->integer("rol_id")->unsigned();

            $table->foreign("rol_id")->references("id")->on("roles")
                ->onDelete("cascade")
                ->onUpdate("cascade");
        // $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('usuarios');
    }
}
