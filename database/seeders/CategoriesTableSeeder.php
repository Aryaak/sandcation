<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Category::create([
            'id' => 1,
            'name' => 'Villa'
        ]);
        Category::create([
            'id' => 2,
            'name' => 'Apartement'
        ]);
        Category::create([
            'id' => 3,
            'name' => 'Glamping'
        ]);
        Category::create([
            'id' => 4,
            'name' => 'Hotel'
        ]);
    }
}
