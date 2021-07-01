<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::get('start-method', 'App\Http\Controllers\StartController@startMethod');

Route::get('{any}', function () {
    return response()->json(['success' => false, 'message' => 'Not found'], 404);
})->where('any', '.*');

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });


