<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{

    protected $contact, $request;

    public function __construct( Contact $contact,Request $request)
    {
        $this->request = $request;
        $this->contact = $contact;

    }

    public function index()
    {
        return $this->contact->all();
    }
    public function store()
    {
        $data = $this->request->all();
        $data = $this->contact->create($data);
        return response()->json($data->fresh());
    }


    public function show($id)
    {
        //
    }


    public function update()
    {
        $data = $this->contact->find(request('id'));
        $x = $this->request->all();
        $data->update($x);
//        return response()->json($data->fresh());
    }



    public function destroy($id)
    {
        $data = $this->contact->find($id);
        $data->delete();
        return response()->json('deleted');
    }
}
