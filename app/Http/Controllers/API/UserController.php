<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Validator;
use App\Http\Controllers\API\ResponseFormatter;

class UserController extends Controller
{

    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required',
            'c_password' => 'required|same:password',
        ]);

        if ($validator->fails()) {
            return ResponseFormatter::failed('Incomplete request!', $validator->errors());
        }

        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        $user = User::create($input);
        $success['token'] =  $user->createToken('nApp')->accessToken;
        $success['name'] =  $user->name;

        return ResponseFormatter::success($success, 'User register successfull!');
    }

    public function login()
    {
        if (Auth::attempt(['email' => request('email'), 'password' => request('password')])) {
            $user = Auth::user();
            $success['token'] =  $user->createToken('nApp')->accessToken;
            return ResponseFormatter::success($success, 'User login successfull!');
        } else {
            return ResponseFormatter::failed('Unauthorised!');
        }
    }

    public function profile()
    {
        $user = Auth::user();
        return ResponseFormatter::success($user, 'Get profile user successfull!');
    }

    public function logout(Request $request)
    {
        $logout = $request->user()->token()->revoke();
        if ($logout) {
            return ResponseFormatter::success([], 'User logout successfull!');
        }
    }
}
