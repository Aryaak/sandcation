<?php

namespace App\Http\Controllers\API;


class ResponseFormatter
{
    public static $response = [
        'meta' => [
            'status' => '',
            'code' => 0,
            'message' => ''
        ],
        'data' => [],
        'error' => []
    ];

    public static function success($data, $message)
    {
        self::$response['meta']['status'] = 'success!';
        self::$response['meta']['code'] = 200;
        self::$response['meta']['message'] = $message;
        self::$response['data'] = $data;

        return response()->json(self::$response);
    }

    public static function failed($message, $error = [])
    {
        self::$response['meta']['status'] = 'failed!';
        self::$response['meta']['code'] = 401;
        self::$response['meta']['message'] = $message;
        self::$response['error'] = $error;


        return response()->json(self::$response);
    }
}
