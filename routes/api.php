<?php

use App\Http\Controllers\API\HostelController;
use App\Http\Controllers\API\IOFileController;
use App\Http\Controllers\API\ReviewController;
use App\Http\Controllers\API\UserController;
use Illuminate\Support\Facades\Route;

Route::post('login', [UserController::class, 'login']);
Route::post('register', [UserController::class, 'register']);

// Hostel API
Route::get('hostels', [HostelController::class, 'index']);
Route::post('hostel/store', [HostelController::class, 'store']);
Route::get('hostel/getById/{id}', [HostelController::class, 'getById']);
Route::get('hostel/getByUserId', [HostelController::class, 'getByUserId']);
Route::get('hostel/category', [HostelController::class, 'getCategory']);

Route::group(['middleware' => 'auth:api'], function () {
    Route::get('profile', [UserController::class, 'profile']);
    Route::post('logout', [UserController::class, 'logout']);
    Route::post('iofile/upload', [IOFileController::class, 'upload']);

    // Review API
    Route::get('review/getsByHostelId/{user_id}/{hostel_id}', [ReviewController::class, 'getsByHostelId']);
    Route::get('review/getByUserId/{user_id}/{hostel_id}', [ReviewController::class, 'getByUserId']);
    Route::post('review/store', [ReviewController::class, 'store']);
    Route::put('review/update', [ReviewController::class, 'update']);
    Route::delete('review/delete', [ReviewController::class, 'delete']);
});
