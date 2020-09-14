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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::apiResource('users', 'App\Http\Controllers\UserController');
Route::apiResource('contacts', 'App\Http\Controllers\ContactController');
Route::apiResource('comments', 'App\Http\Controllers\CommentController');
Route::post('contact_comments', 'App\Http\Controllers\CommentController@getUserComments');
