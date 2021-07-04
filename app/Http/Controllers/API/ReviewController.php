<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Review;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    public function getsByHostelId(Request $request)
    {
        $input = $request->all();

        $reviews = Review::where('hostel_id', $input['hostel_id'])->with('user')->get();

        return ResponseFormatter::success($reviews, 'Get Review By Hostel Id Successfull!');
    }

    public function getByUserId($user_id, $hostel_id)
    {
        $reviews = Review::where('hostel_id', $hostel_id)->where('user_id', $user_id)->with('user')->first();

        return ResponseFormatter::success($reviews, 'Get Review By User Id Successfull!');
    }
    public function store(Request $request)
    {
        $input = $request->all();

        $review = Review::create($input);

        return ResponseFormatter::success($review, 'Store New Review Successfull!');
    }

    public function update(Request $request)
    {
        $input = $request->all();

        $review = Review::where('hostel_id', $input['hostel_id'])->where('user_id', $input['user_id'])->update($input);

        return ResponseFormatter::success($review, 'Update Review Successfull!');
    }

    public function delete(Request $request)
    {
        $input = $request->all();

        Review::where('hostel_id', $input['hostel_id'])->where('user_id', $input['user_id'])->delete();

        return ResponseFormatter::success([], 'Delete Review Successfull!');
    }
}
