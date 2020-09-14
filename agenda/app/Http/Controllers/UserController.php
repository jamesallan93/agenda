<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    protected $user, $request;

    public function __construct(User $user,Request $request)
    {
        $this->request = $request;
        $this->user = $user;

    }

    public function index()
    {
        return $this->user->all();
    }


    public function store()
    {
        $data = $this->request->all();
        $data = $this->user->create($data);
        return response()->json($data->fresh());
    }


    public function show($id)
    {
        //
    }


    public function update(Request $request, $id)
    {
        //
    }


    public function destroy($id)
    {
        //
    }
}
