<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Hostel;
use Illuminate\Http\Request;

class HostelController extends Controller
{
    public function index()
    {
        $data = Hostel::orderBy('id', 'DESC')->with('category')->get();
        return ResponseFormatter::success($data, 'Get Data Hostel Successfull!');
    }

    public function store()
    {
        $input = request()->except('fileData');
        $data = Hostel::create($input);
        return ResponseFormatter::success($data, 'Insert New Data Hostel Successfull!');
    }

    public function getById($id)
    {
        $data = Hostel::where('id', $id)->with('category', 'user', 'reviews.user')->first();
        return ResponseFormatter::success($data, 'Get Data Hostel Successfull!');
    }

    public function getByUserId()
    {
        $input = request()->all();
        $data = Hostel::orderBy('id', 'DESC')->where('user_id', $input['user_id'])->get();
        return ResponseFormatter::success($data, 'Get Data Hostel Successfull!');
    }

    public function getCategory()
    {
        $data = Category::orderBy('id', 'DESC')->get();
        return ResponseFormatter::success($data, 'Get Data Hostel Category Successfull!');
    }
}
