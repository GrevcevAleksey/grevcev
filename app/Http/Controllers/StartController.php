<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\StartRequest;

class StartController extends Controller
{
    public function startMethod(StartRequest $request) 
    {
        dd($request);
    }
}
