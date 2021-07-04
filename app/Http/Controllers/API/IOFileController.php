<?php

namespace App\Http\Controllers\API;

use Exception;

class IOFileController
{
    public  function upload()
    {
        try {

            $data =   request()->file('file')->store('assets/photo', 'public');
            return ResponseFormatter::success($data, 'Upload File Successfull!');
        } catch (Exception $e) {
            return ResponseFormatter::failed($e, 'Upload File Failed!');
        }
    }
}
