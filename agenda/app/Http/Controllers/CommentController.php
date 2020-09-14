<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    protected $comment, $request;

    public function __construct(Comment $comment, Request $request)
    {
        $this->request = $request;
        $this->comment = $comment;
    }
    public function index()
    {
        return response()->json($this->comment->all());
    }


    public function store()
    {
        $data = $this->request->all();
        $data = $this->comment->create($data);
        return response()->json($data->fresh());
    }

    public function getUserComments()
    {
        $data = $this->request->all();
        $data = $this->comment->where('contact_id', $data['id'])->get();
        return response()->json($data);
    }

    public function update()
    {
        $data = $this->comment->find(request('id'));
        $x = $this->request->all();
        $data->update($x);
        return response()->json($data->fresh());
    }


    public function destroy($id)
    {
        $data = $this->comment->find($id);
        $data->delete();
        return response()->json('deleted');
    }
}
