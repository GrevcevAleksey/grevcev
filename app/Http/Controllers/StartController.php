<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\BaseController;
use App\Http\Requests\StartRequest;


class StartController extends BaseController
{
    public function startMethod(StartRequest $request) 
    {
        dd('sdfsdfsdf');
    }
}
