<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategorieController;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\ScategorieController;
use App\Http\Controllers\PaymentController;

/*
|--------------------------------------------------------------------------
| API Routes

|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::middleware('api')->group(function () {
    Route::resource('categories', CategorieController::class);
    });

Route::middleware('api')->group(function () {
        Route::resource('articles', ArticleController::class);
        });

Route::middleware('api')->group(function () {
        Route::resource('scategories', ScategorieController::class); 
            });

Route::middleware('api')->group(function($router) {
                Route::post('/createpayment', [PaymentController::class, 'createPaymentIntent']);
                });

Route::get('/scat/{idcat}', 
[ScategorieController::class,'showSCategorieByCAT']);