<?php

namespace Database\Seeders;

use App\Models\Status;
use Illuminate\Database\Seeder;

class StatusTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Status::create([
            'id' => 1,
            'name' => 'Dipesan'
        ]);
        Status::create([
            'id' => 2,
            'name' => 'Aktif'
        ]);
        Status::create([
            'id' => 3,
            'name' => 'Selesai'
        ]);
        Status::create([
            'id' => 4,
            'name' => 'Hangus'
        ]);
    }
}
