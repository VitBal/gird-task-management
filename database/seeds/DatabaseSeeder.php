<?php

use GirdBase\database\seeds\AccessableIpSeeder;
use GirdBase\database\seeds\ModuleSeeder;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        //регистрация модуля
        $this->call(ModuleSeeder::class);

        if(config('app.env') !== 'production') {
            $this->call(AccessableIpSeeder::class);   //разрешенные ip
            $this->call(UsersSeeder::class);
        }
    }
}
